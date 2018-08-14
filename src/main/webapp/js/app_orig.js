var userDeferred = $.Deferred();
var userPromise = userDeferred.promise();
var usersDeferred = $.Deferred();
var usersPromise = usersDeferred.promise();

var attendeeGroupsDeferred = $.Deferred();
var attendeeGroupsPromise = attendeeGroupsDeferred.promise();

var betsDeferred = $.Deferred();
var betsPromise = betsDeferred.promise();

var scoresDeferred = $.Deferred();
var scoresPromise = scoresDeferred.promise();

var userFbId2user = new Object(null);

function loginCallback(response) {
    userInfo.userId = response.authResponse.userID;
    FB.api('/me', function(fbUser) {
      $("#userName").html("Hi, "+fbUser.name);
      
        var request = {
            "type": "POST", 
            "url": "/user",
            "data": {
                "fbId": userInfo.userId,
                "name": fbUser.name
            }
        };
        dataUtils.fetch(request).then(function(result){
            userDeferred.resolve();
        });
        
    });

}

var app = angular.module('myApp', ['ngRoute']);


const year=2018;


dummyResponse['teamInfo'] = [
    {'id': 1, 'name': 'Russia', 'simpleName': 'rus', 'factor': 1},
    {'id': 2, 'name': 'Saudi Arabia', 'simpleName': 'ksa', 'factor': 1},
    {'id': 3, 'name': 'Egypt', 'simpleName': 'egy', 'factor': 1},
    {'id': 4, 'name': 'Uruguay', 'simpleName': 'uru', 'factor': 1},
    
    {'id': 5, 'name': 'Portugal', 'simpleName': 'por', 'factor': 1},
    {'id': 6, 'name': 'Spain', 'simpleName': 'esp', 'factor': 1},
    {'id': 7, 'name': 'Morocco', 'simpleName': 'mar', 'factor': 1},
    {'id': 8, 'name': 'IR Iran', 'simpleName': 'irn', 'factor': 1},

];
var teamInfoBySimpleName = Object.create(null); //key: simpleName, value: team
var teamInfoById = Object.create(null); //key: team id, value: team

app.controller('contentCtrl', function($scope, $element, $timeout) {
    userPromise.then(fetchRoundScore);
    function fetchRoundScore() {
        var request = {
            "type": "GET", 
            "url": "/roundScore"
        };
        dataUtils.fetch(request).then(function(result) {
            $timeout(function(){
                $scope.roundScores = result;
                scoresDeferred.resolve();
            });
        });
    }

    var users = [];
    $("#rank-switch").change(function() {
        if($("#rank-switch").prop('checked')) {
            $scope.users = users.filter(function(user) {
                return user.gameMember == $("#rank-switch").prop('checked');
            });
        } else {
            $scope.users = users;
        }
        $scope.$apply();
    });
    
    
    Promise.all([scoresDeferred, betsPromise, usersPromise]).then(function() {
        // console.log($scope.roundScores);
        // console.log($scope.users);
        // console.log($scope.betsByUserId);
        // console.log($scope.roundWinners);
        $scope.userPoints;
        $scope.users.forEach(function(user){
            console.info("====== " + user.name + "======");
            user.point = calculatePoint($scope.betsByUserId[user.id], $scope.attendees, $scope.roundWinners, $scope.roundScores);
        });
        $scope.$apply();
    });

    function calculatePoint(bets, attendees, roundWinners, roundScores) {
        var attendeesById = _.indexBy(attendees, 'id');
        var roundScoresByRoundTeamId = Object.create(null); //key: {round}_{teamId}
        roundScores.forEach(function(roundScore){
            roundScoresByRoundTeamId[roundScore.round+"_"+roundScore.teamId] = roundScore;
        });
        
        var winPointSum = 0;
        var bonusSum = 0;
        
        _.values(bets).forEach(function(bet){
            if(!bet.bet) {
                return;
            }
            var teamId =attendeesById[bet.roundAttendeeId].teamId;
            var attendee = attendeesById[bet.roundAttendeeId];
            if(roundWinners.indexOf(bet.roundAttendeeId)!=-1) {
                var wiuPoint = getWinPoint(attendee);
                console.info("@Round["+attendee.round+"] [押贏] "+ getTeamNameCn(teamId) + " @Round["+attendee.round+"] 積分 = "+wiuPoint);
                winPointSum += wiuPoint;
            }

            if(attendee.round>=2) {  
                var roundScore = roundScoresByRoundTeamId[attendee.round+"_"+teamId];
                if(roundScore==null) {
                    console.warn( "            @Round["+attendee.round+"] " + getTeamNameCn(teamId) + "  得分尚未更新於資料庫!");
                } else {
                    console.info("@Round["+attendee.round+"] [BONUS]" +getTeamNameCn(teamId) + " 積分 = "+roundScore.score);
                    bonusSum += roundScore.score;
                }
            }

        });
        console.info("押贏 總積分 = " + winPointSum);
        console.info("bonus 總積分 = " + bonusSum);
        return winPointSum + bonusSum;
    }

    function updatePoints() {
        $scope.users.forEach(function(user){
            $("#point_"+user.id).html(user.point);
        });
    }
    

    function getWinPoint(attendee) {
        var factor = teamInfoById[attendee.teamId].factor;
        return factor * attendee.round;
    }

    attendeeGroupsPromise.then(fetchRoundWinners);
    function fetchRoundWinners() {
        var request = {
            "type": "GET", 
            "url": "/roundWinner"
        };
        dataUtils.fetch(request).then(function(result) {
            $timeout(function(){
                $scope.roundWinners = result;
            });
        });
    }
    attendeeGroupsPromise.then(fetchUsers);
    function fetchUsers() {
        $timeout(function(){
            var requestForUsers = {
                "type": "GET", 
                "url": "/user"
            };
            dataUtils.fetch(requestForUsers).then(function(result) {
                $timeout(function(){
                    $scope.users = result;
                    users = result;
                    
                    userFbId2user = new Object(null);
                    result.forEach(function(user){
                        userFbId2user[user.fbId] = user;
                    });

                    usersDeferred.resolve();
                });
            });
        });
    }
    
    var request2 = {
        "type": "GET", 
        "url": "/teamInfo"
    };
    dataUtils.fetch(request2).then(function(result){
        $scope.teams = result;
        $timeout(function(){
            result.forEach(function(team){
                teamInfoBySimpleName[team.simpleName] = team;
                teamInfoById[team.id] = team;
            });
        });
    });
    
    $scope.getTeamFlagUrl = function(teamId) {
        if(teamInfoById[teamId]==null) return;
        return "./img/flags/"+teamInfoById[teamId].simpleName;
    }

    $scope.getTeamNameCn = getTeamNameCn;


    attendeeGroupsPromise.then(fetchBet);
    function fetchBet() {
        $timeout(function(){
            var requestForBet = {
                "type": "GET", 
                "url": "/bet",
            };
            dataUtils.fetch(requestForBet).then(function(result){
                $timeout(function(){
                    $scope.betsByUserId = toBetByUser(result);
                    betsDeferred.resolve();
                })
                $scope.bet={};
                result.filter(function(bet){
                    return bet.fbId==userInfo.userId;
                }).forEach(function(bet){
                    $scope.bet[bet.roundAttendeeId] = bet.bet;
                    $('input.bet:checkbox[attendee-id='+bet.roundAttendeeId+']').prop('checked', bet.bet);
                    $('input.bet:checkbox[attendee-id='+bet.roundAttendeeId+']').bootstrapToggle('destroy');
                    $('input.bet:checkbox[attendee-id='+bet.roundAttendeeId+']').bootstrapToggle();
                    
                });

            });    
        });
    }
    function toBetByUser (bets) {
        var betsByUserId = _.groupBy(bets, 'userId');
        for(var userId in betsByUserId) {
            bets = betsByUserId[userId];
            var betsByAttendeeId = Object.create(null);
            bets.forEach(function(bet) {
                betsByAttendeeId[bet.roundAttendeeId] = bet;
            });
            betsByUserId[userId] = betsByAttendeeId;
        }
        return betsByUserId;
    }

    $scope.bet={};

    userPromise.then(fetchRoundAttendees);
    function fetchRoundAttendees() {
        var request = {
            "type": "GET", 
            "url": "/roundAttendee"
        };
        dataUtils.fetch(request).then(function(result){
            
            $scope.attendeeGroupsByRound = _.groupBy(result, 'round'); //key: round, value: array of attendeeGroups
            $scope.attendeesByRound = toAttendeesByRound($scope.attendeeGroupsByRound);
            
            $scope.rounds = _.keys($scope.attendeeGroupsByRound);
            attendeeGroupsDeferred.resolve();
        
            var attendees = [];
            result.forEach(function(attendeeGroup){
                attendeeGroup.attendees.forEach(function(attendee) {
                    attendees.push(attendee);
                });
            });
            $scope.attendees = attendees.sort(function(a, b){
                return a.id-b.id;
            });
        });
    
        $scope.getRoundName = function(round){
            return roundNames[round];
        };
    }
    function toAttendeesByRound(attendeeGroupsByRound) {
        var attendeesByRound = Object.create(null);
        for(var round in attendeeGroupsByRound) {
            var attendeeById = Object.create(null);
            attendeeGroups = attendeeGroupsByRound[round];            
            attendeeGroups.forEach(function(attendeeGroup){
                attendeeGroup.attendees.forEach(function(attendee){
                    attendeeById[attendee.id] = attendee;
                });
            });
            attendeesByRound[round] = _.values(attendeeById);
        }
        return attendeesByRound;
    }

    $scope.getTeamFlagUrl = function(teamId) {
        if(teamInfoById[teamId]==null) return;
        return "./img/flags/"+teamInfoById[teamId].simpleName;
    }

    $scope.getTeamName = function(teamId) {
        if(teamInfoById[teamId]==null) return;
        return teamInfoById[teamId].name;
    }

    // var requestForBet = {"dummy": "bet"};
    function getBetLimit(checkboxSize) {
        return checkboxSize==2? 1: 2;
    }
    $element.on('change', "input.bet:checkbox", function(event) {
        if($(this).closest("td").siblings().find('input.bet:checked').length >= getBetLimit($(this).closest("tr").find("input.bet").length)) {
            if($(this).prop('checked')==false) {
                return;
            }
            this.checked = false;   
            $(this).bootstrapToggle('off');
        }
        var roundAttendeeId = $(this).attr("attendee-id");
        $scope.bet[roundAttendeeId] = this.checked;
        var request = {
            "type": "POST", 
            "url": "/bet",
            "data": {
                "fbId": userInfo.userId,
                "roundAttendeeId": roundAttendeeId,
                "bet": this.checked
            }
        };
        var teamId = $(this).attr("team-id");
        dataUtils.fetch(request).then(function(result){
            if(result.success) {
                var act = result.bet? "下注": "取消";
            }
            $("#msg").html("已成功 " + act + " 隊伍 " + getTeamNameCn(teamId));
            $(".thxmsg").slideToggle(true);
            $timeout(function(){
                $(".thxmsg").slideToggle(false);
            }, 1000);
        });
        
    });

    $scope.isShowBettingSummary = function(round) {
        return !isBetable(parseInt(round));
    }

});



dummyResponse['rank'] = [
    // {'name': 'Bill', 'point': 1001},
    // {'name': 'Allen', 'point': 1002},
    // {'name': 'Tim', 'point': 1003}
];
app.controller('rankCtrl', function($scope, $timeout) {
    var request = {"dummy": "rank"};
    dataUtils.fetch(request).then(function(result){
        $timeout(function(){
            $scope.rank = result;
        });
        
    });

});


// dummyResponse['attendeeGroups'] = [
//     {'round': 1, 'groupName': 'Group A', attendees:[
//         {roundAttendeeId: 1, teamId: 1},
//         {roundAttendeeId: 2, teamId: 2},
//         {roundAttendeeId: 3, teamId: 3},
//         {roundAttendeeId: 4, teamId: 4}
//     ]},
//     {'round': 1, 'groupName': 'Group B', attendees:[
//         {roundAttendeeId: 5, teamId: 5},
//         {roundAttendeeId: 6, teamId: 6},
//         {roundAttendeeId: 7, teamId: 7},
//         {roundAttendeeId: 8, teamId: 8}
//     ]}
// ];
// dummyResponse['bet'] = [
//     {'roundAttendeeId': 1}, 
//     {'roundAttendeeId': 3}
// ]

//var roundAttendeeById = Object.create(null); //key: roundAttendee id, value: roundAttendee

app.controller('betCtrl', function($scope, $element, $timeout, $location, $routeParams) {
    $scope.betEnable = {};

    $scope.isBetable = function(round, attendeeId) {
        startMonitoringCheckbox(attendeeId, round);
        var isBetable_ = isBetable(round);
        if(!isBetable_) {
            $('input.bet[attendee-id='+attendeeId+']').bootstrapToggle('disable');
        }
        return isBetable;
    }


    function startMonitoringCheckbox(attendeeId, round) {
        setInterval(function(){ 
            var isBetable_ = isBetable(round);
            if(!isBetable_) {
                $('input.bet[attendee-id='+attendeeId+']').prop("disabled", true);
                $('input.bet[attendee-id='+attendeeId+']').bootstrapToggle('disable');
            }
        }, 1000);
    }
});


function isBetable(round) {
    var now = new Date().getTime();
    switch(round) {
        case 1: 
            return now < 1528984800000; //1528984800000 = 2018/06/14 22:00
        case 2: 
            return now < 1530363600000; //1530363600000 = 2018/06/30 21:00
        case 3: 
            return now < 1530882000000; //1530882000000 = 2018/07/06 21:00
        case 4: 
            return now < 1531242000000; //1531242000000 = 2018/07/11 01:00
        case 5: 
            return now < 1531663200000; //1531663200000 = 2018/07/15 22:00
    }
}

function getTeamNameCn(teamId) {
    if (teamId== undefined || teamInfoById==undefined || teamInfoById[teamId]==undefined )
        return;
    return teamNames[teamInfoById[teamId].simpleName].cn;
}
app.directive('onCheckboxFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            $timeout(function () {
                element.bootstrapToggle();
            });
        }
    }
});



var teamNames = {
    'rus': {name:'Russia', cn:'俄羅斯'},
    'ksa': {name:'Saudi Arabia', cn:'沙烏地阿拉伯'},
    'egy': {name:'Egypt', cn:'埃及'},
    'uru': {name:'Uruguay', cn:'烏拉圭'},
    'por': {name:'Portugal', cn:'葡萄牙'},
    'esp': {name:'Spain', cn:'西班牙'},
    'mar': {name:'Morocco', cn:'摩洛哥'},
    'irn': {name:'IR Iran', cn:'伊朗'},
    'fra': {name:'France', cn:'法國'},
    'aus': {name:'Australia', cn:'澳洲'},
    'per': {name:'Peru', cn:'秘魯'},
    'den': {name:'Denmark', cn:'丹麥'},
    'arg': {name:'Argentina', cn:'阿根廷'},
    'isl': {name:'Iceland', cn:'冰島'},
    'cro': {name:'Croatia', cn:'克羅埃西亞'},
    'nga': {name:'Nigeria', cn:'奈及利亞'},
    'bra': {name:'Brazil', cn:'巴西'},
    'sui': {name:'Switzerlan', cn:'瑞士'},
    'crc': {name:'Costa Rica', cn:'哥斯大黎加'},
    'srb': {name:'Serbia', cn:'塞爾維亞'},
    'ger': {name:'Germany', cn:'德國'},
    'mex': {name:'Mexico', cn:'墨西哥'},
    'swe': {name:'Sweden', cn:'瑞典'},
    'kor': {name:'Korea Republic', cn:'南韓'},
    'bel': {name:'belgium', cn:'比利時'},
    'pan': {name:'Panama', cn:'巴拉馬'},
    'tun': {name:'Tunisia', cn:'突尼西亞'},
    'eng': {name:'England', cn:'英格蘭'},
    'pol': {name:'Poland', cn:'波蘭'},
    'sen': {name:'Sengegal', cn:'塞內加爾'},
    'col': {name:'Colombia', cn:'哥倫比亞'},
    'jpn': {name:'Japan', cn:'日本'},
    'unknown': {name:'unknown', cn:'未定'}
};


var roundNames={
    '1': "小組賽(32選16)",
    '2': "16強(16選8)",
    '3': "8強(8選4)",
    '4': "準決賽(4選2)",
    '5': "決賽(2選1)"
};