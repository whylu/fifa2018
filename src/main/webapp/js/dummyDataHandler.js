var RealDataHandler = function() {
    this.sendRequest = function(request) {
        var deferred = $.Deferred();
        $.ajax({
            type: request.type,
            url: request.url,
            data: JSON.stringify(request.data),
            success: function(response) {
                deferred.resolve(response);
            },
            dataType: 'json',
            contentType: "application/json; charset=utf-8"
          });

        return deferred.promise();
    }
}
var DummyDataHandler = function() {
    const realDataHandler = new RealDataHandler();

    this.sendRequest = function(request) {
        if(request.dummy!=undefined) {
            var response = dummyResponse[request.dummy];
            console.log("request data for ["+request.dummy+"]: ", response);
            var deferred = $.Deferred();
            deferred.resolve(response);
            return deferred.promise();
        } else {
            return realDataHandler.sendRequest(request);
        }
        
    }
    
}
const dummyDataHandler = new DummyDataHandler();
$.extend(dummyDataHandler, dataHandler);

const dataUtils = new DataUtils();
dataUtils.setDataHandler(dummyDataHandler);

var dummyResponse = Object.create(null);



dummyResponse["/teamInfo"] = 
[
  {
    "year": 2018,
    "simpleName": "rus",
    "name": "Russia",
    "id": 201801,
    "factor": 2
  },
  {
    "year": 2018,
    "simpleName": "ksa",
    "name": "Saudi Arabia",
    "id": 201802,
    "factor": 4
  },
  {
    "year": 2018,
    "simpleName": "egy",
    "name": "Egypt",
    "id": 201803,
    "factor": 3
  },
  {
    "year": 2018,
    "simpleName": "uru",
    "name": "Uruguay",
    "id": 201804,
    "factor": 1
  },
  {
    "year": 2018,
    "simpleName": "por",
    "name": "Portugal",
    "id": 201805,
    "factor": 1
  },
  {
    "year": 2018,
    "simpleName": "esp",
    "name": "Spain",
    "id": 201806,
    "factor": 1
  },
  {
    "year": 2018,
    "simpleName": "mar",
    "name": "Morocco",
    "id": 201807,
    "factor": 4
  },
  {
    "year": 2018,
    "simpleName": "irn",
    "name": "IR Iran",
    "id": 201808,
    "factor": 4
  },
  {
    "year": 2018,
    "simpleName": "fra",
    "name": "France",
    "id": 201809,
    "factor": 1
  },
  {
    "year": 2018,
    "simpleName": "aus",
    "name": "Australia",
    "id": 201810,
    "factor": 4
  },
  {
    "year": 2018,
    "simpleName": "per",
    "name": "Peru",
    "id": 201811,
    "factor": 3
  },
  {
    "year": 2018,
    "simpleName": "den",
    "name": "Denmark",
    "id": 201812,
    "factor": 2
  },
  {
    "year": 2018,
    "simpleName": "arg",
    "name": "Argentina",
    "id": 201813,
    "factor": 1
  },
  {
    "year": 2018,
    "simpleName": "isl",
    "name": "Iceland",
    "id": 201814,
    "factor": 3
  },
  {
    "year": 2018,
    "simpleName": "cro",
    "name": "Croatia",
    "id": 201815,
    "factor": 2
  },
  {
    "year": 2018,
    "simpleName": "nga",
    "name": "Nigeria",
    "id": 201816,
    "factor": 3
  },
  {
    "year": 2018,
    "simpleName": "bra",
    "name": "Brazil",
    "id": 201817,
    "factor": 1
  },
  {
    "year": 2018,
    "simpleName": "sui",
    "name": "Switzerlan",
    "id": 201818,
    "factor": 2
  },
  {
    "year": 2018,
    "simpleName": "crc",
    "name": "Costa Rica",
    "id": 201819,
    "factor": 4
  },
  {
    "year": 2018,
    "simpleName": "srb",
    "name": "Serbia",
    "id": 201820,
    "factor": 3
  },
  {
    "year": 2018,
    "simpleName": "ger",
    "name": "Germany",
    "id": 201821,
    "factor": 1
  },
  {
    "year": 2018,
    "simpleName": "mex",
    "name": "Mexico",
    "id": 201822,
    "factor": 2
  },
  {
    "year": 2018,
    "simpleName": "swe",
    "name": "Sweden",
    "id": 201823,
    "factor": 3
  },
  {
    "year": 2018,
    "simpleName": "kor",
    "name": "Korea Republic",
    "id": 201824,
    "factor": 4
  },
  {
    "year": 2018,
    "simpleName": "bel",
    "name": "belgium",
    "id": 201825,
    "factor": 1
  },
  {
    "year": 2018,
    "simpleName": "pan",
    "name": "Panama",
    "id": 201826,
    "factor": 4
  },
  {
    "year": 2018,
    "simpleName": "tun",
    "name": "Tunisia",
    "id": 201827,
    "factor": 4
  },
  {
    "year": 2018,
    "simpleName": "eng",
    "name": "England",
    "id": 201828,
    "factor": 1
  },
  {
    "year": 2018,
    "simpleName": "pol",
    "name": "Poland",
    "id": 201829,
    "factor": 2
  },
  {
    "year": 2018,
    "simpleName": "sen",
    "name": "Sengegal",
    "id": 201830,
    "factor": 3
  },
  {
    "year": 2018,
    "simpleName": "col",
    "name": "Colombia",
    "id": 201831,
    "factor": 2
  },
  {
    "year": 2018,
    "simpleName": "jpn",
    "name": "Japan",
    "id": 201832,
    "factor": 3
  },
  {
    "year": 2018,
    "simpleName": "unknown",
    "name": "unknown",
    "id": 0,
    "factor": 0
  }
];

dummyResponse["/user"] = 
[
  {
    "fbId": "10217138133391981",
    "name": "翁銘隆",
    "gameMember": true,
    "id": 3
  },
  {
    "fbId": "10160358017720307",
    "name": "Steven Lin",
    "gameMember": true,
    "id": 6
  },
  {
    "fbId": "2241155462562110",
    "name": "鄒正平",
    "gameMember": false,
    "id": 8
  },
  {
    "fbId": "2033761206635296",
    "name": "江三萬",
    "gameMember": true,
    "id": 10
  },
  {
    "fbId": "2013032825373802",
    "name": "林秀美",
    "gameMember": true,
    "id": 11
  },
  {
    "fbId": "2015490698524241",
    "name": "郭逸民",
    "gameMember": true,
    "id": 12
  },
  {
    "fbId": "1788799031159066",
    "name": "Arno Wang",
    "gameMember": true,
    "id": 13
  },
  {
    "fbId": "2131499633545082",
    "name": "黃凱利",
    "gameMember": true,
    "id": 14
  },
  {
    "fbId": "10216161254965335",
    "name": "Chang-Ming Chu",
    "gameMember": true,
    "id": 15
  },
  {
    "fbId": "2094279473916782",
    "name": "金士安",
    "gameMember": true,
    "id": 16
  },
  {
    "fbId": "10214386458554408",
    "name": "Emily Lin",
    "gameMember": false,
    "id": 17
  },
  {
    "fbId": "10214871448287081",
    "name": "Ying Tsen Lin",
    "gameMember": true,
    "id": 18
  },
  {
    "fbId": "2012315838779325",
    "name": "吳國棟",
    "gameMember": true,
    "id": 20
  },
  {
    "fbId": "10217276197363612",
    "name": "Vincent Hsu",
    "gameMember": true,
    "id": 21
  },
  {
    "fbId": "10216823204119214",
    "name": "Hsiang-ling Chen",
    "gameMember": false,
    "id": 22
  },
  {
    "fbId": "2224049340955153",
    "name": "Sophia Ho",
    "gameMember": false,
    "id": 23
  },
  {
    "fbId": "1953727824638452",
    "name": "Lerdah Wang",
    "gameMember": true,
    "id": 24
  },
  {
    "fbId": "10204797453412047",
    "name": "Afen Chen",
    "gameMember": true,
    "id": 25
  },
  {
    "fbId": "220806331852306",
    "name": "Chen Ting Hsu",
    "gameMember": false,
    "id": 26
  },
  {
    "fbId": "2183668661649623",
    "name": "Talos Kao",
    "gameMember": true,
    "id": 27
  },
  {
    "fbId": "185741508750785",
    "name": "Ikuru Lin",
    "gameMember": true,
    "id": 28
  },
  {
    "fbId": "2123004967715380",
    "name": "Shu Ming Yang",
    "gameMember": true,
    "id": 29
  },
  {
    "fbId": "10209758085063486",
    "name": "邱曉玲",
    "gameMember": true,
    "id": 30
  },
  {
    "fbId": "1561353450653465",
    "name": "Jwayne Chen",
    "gameMember": true,
    "id": 32
  },
  {
    "fbId": "2146420518925968",
    "name": "曾艾莎",
    "gameMember": false,
    "id": 33
  },
  {
    "fbId": "189949558355586",
    "name": "Frank Liao",
    "gameMember": true,
    "id": 34
  },
  {
    "fbId": "10156453640183839",
    "name": "Gwen Liu",
    "gameMember": false,
    "id": 36
  },
  {
    "fbId": "2062052170479830",
    "name": "李佩珊",
    "gameMember": false,
    "id": 37
  },
  {
    "fbId": "1006523426177989",
    "name": "游家慧",
    "gameMember": false,
    "id": 38
  },
  {
    "fbId": "1980220002002305",
    "name": "Sonia Lin",
    "gameMember": false,
    "id": 39
  }
];


dummyResponse["/roundWinner"] = 
[
  1,
  4,
  5,
  6,
  9,
  12,
  13,
  15,
  17,
  18,
  22,
  23,
  25,
  28,
  31,
  32,
  2011,
  2021,
  2032,
  2041,
  2051,
  2061,
  2072,
  2082,
  3012,
  3022,
  3032,
  3042,
  4011,
  4021,
  5011
];

dummyResponse["/roundAttendee"] = 
[
  {
    "groupName": "Group A",
    "round": 1,
    "attendees": [
      {
        "round": 1,
        "year": 2018,
        "teamId": 201801,
        "roundGroup": "1_Group A",
        "grounpName": "Group A",
        "id": 1
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201802,
        "roundGroup": "1_Group A",
        "grounpName": "Group A",
        "id": 2
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201803,
        "roundGroup": "1_Group A",
        "grounpName": "Group A",
        "id": 3
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201804,
        "roundGroup": "1_Group A",
        "grounpName": "Group A",
        "id": 4
      }
    ]
  },
  {
    "groupName": "Group B",
    "round": 1,
    "attendees": [
      {
        "round": 1,
        "year": 2018,
        "teamId": 201805,
        "roundGroup": "1_Group B",
        "grounpName": "Group B",
        "id": 5
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201806,
        "roundGroup": "1_Group B",
        "grounpName": "Group B",
        "id": 6
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201807,
        "roundGroup": "1_Group B",
        "grounpName": "Group B",
        "id": 7
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201808,
        "roundGroup": "1_Group B",
        "grounpName": "Group B",
        "id": 8
      }
    ]
  },
  {
    "groupName": "Group C",
    "round": 1,
    "attendees": [
      {
        "round": 1,
        "year": 2018,
        "teamId": 201809,
        "roundGroup": "1_Group C",
        "grounpName": "Group C",
        "id": 9
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201810,
        "roundGroup": "1_Group C",
        "grounpName": "Group C",
        "id": 10
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201811,
        "roundGroup": "1_Group C",
        "grounpName": "Group C",
        "id": 11
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201812,
        "roundGroup": "1_Group C",
        "grounpName": "Group C",
        "id": 12
      }
    ]
  },
  {
    "groupName": "Group D",
    "round": 1,
    "attendees": [
      {
        "round": 1,
        "year": 2018,
        "teamId": 201813,
        "roundGroup": "1_Group D",
        "grounpName": "Group D",
        "id": 13
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201814,
        "roundGroup": "1_Group D",
        "grounpName": "Group D",
        "id": 14
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201815,
        "roundGroup": "1_Group D",
        "grounpName": "Group D",
        "id": 15
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201816,
        "roundGroup": "1_Group D",
        "grounpName": "Group D",
        "id": 16
      }
    ]
  },
  {
    "groupName": "Group E",
    "round": 1,
    "attendees": [
      {
        "round": 1,
        "year": 2018,
        "teamId": 201817,
        "roundGroup": "1_Group E",
        "grounpName": "Group E",
        "id": 17
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201818,
        "roundGroup": "1_Group E",
        "grounpName": "Group E",
        "id": 18
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201819,
        "roundGroup": "1_Group E",
        "grounpName": "Group E",
        "id": 19
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201820,
        "roundGroup": "1_Group E",
        "grounpName": "Group E",
        "id": 20
      }
    ]
  },
  {
    "groupName": "Group F",
    "round": 1,
    "attendees": [
      {
        "round": 1,
        "year": 2018,
        "teamId": 201821,
        "roundGroup": "1_Group F",
        "grounpName": "Group F",
        "id": 21
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201822,
        "roundGroup": "1_Group F",
        "grounpName": "Group F",
        "id": 22
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201823,
        "roundGroup": "1_Group F",
        "grounpName": "Group F",
        "id": 23
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201824,
        "roundGroup": "1_Group F",
        "grounpName": "Group F",
        "id": 24
      }
    ]
  },
  {
    "groupName": "Group G",
    "round": 1,
    "attendees": [
      {
        "round": 1,
        "year": 2018,
        "teamId": 201825,
        "roundGroup": "1_Group G",
        "grounpName": "Group G",
        "id": 25
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201826,
        "roundGroup": "1_Group G",
        "grounpName": "Group G",
        "id": 26
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201827,
        "roundGroup": "1_Group G",
        "grounpName": "Group G",
        "id": 27
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201828,
        "roundGroup": "1_Group G",
        "grounpName": "Group G",
        "id": 28
      }
    ]
  },
  {
    "groupName": "Group H",
    "round": 1,
    "attendees": [
      {
        "round": 1,
        "year": 2018,
        "teamId": 201829,
        "roundGroup": "1_Group H",
        "grounpName": "Group H",
        "id": 29
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201830,
        "roundGroup": "1_Group H",
        "grounpName": "Group H",
        "id": 30
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201831,
        "roundGroup": "1_Group H",
        "grounpName": "Group H",
        "id": 31
      },
      {
        "round": 1,
        "year": 2018,
        "teamId": 201832,
        "roundGroup": "1_Group H",
        "grounpName": "Group H",
        "id": 32
      }
    ]
  },
  {
    "groupName": "1A VS 2B",
    "round": 2,
    "attendees": [
      {
        "round": 2,
        "year": 2018,
        "teamId": 201804,
        "roundGroup": "2_1A VS 2B",
        "grounpName": "1A VS 2B",
        "id": 2021
      },
      {
        "round": 2,
        "year": 2018,
        "teamId": 201805,
        "roundGroup": "2_1A VS 2B",
        "grounpName": "1A VS 2B",
        "id": 2022
      }
    ]
  },
  {
    "groupName": "1B VS 2A",
    "round": 2,
    "attendees": [
      {
        "round": 2,
        "year": 2018,
        "teamId": 201806,
        "roundGroup": "2_1B VS 2A",
        "grounpName": "1B VS 2A",
        "id": 2031
      },
      {
        "round": 2,
        "year": 2018,
        "teamId": 201801,
        "roundGroup": "2_1B VS 2A",
        "grounpName": "1B VS 2A",
        "id": 2032
      }
    ]
  },
  {
    "groupName": "1C VS 2D",
    "round": 2,
    "attendees": [
      {
        "round": 2,
        "year": 2018,
        "teamId": 201809,
        "roundGroup": "2_1C VS 2D",
        "grounpName": "1C VS 2D",
        "id": 2011
      },
      {
        "round": 2,
        "year": 2018,
        "teamId": 201813,
        "roundGroup": "2_1C VS 2D",
        "grounpName": "1C VS 2D",
        "id": 2012
      }
    ]
  },
  {
    "groupName": "1D VS 2C",
    "round": 2,
    "attendees": [
      {
        "round": 2,
        "year": 2018,
        "teamId": 201815,
        "roundGroup": "2_1D VS 2C",
        "grounpName": "1D VS 2C",
        "id": 2041
      },
      {
        "round": 2,
        "year": 2018,
        "teamId": 201812,
        "roundGroup": "2_1D VS 2C",
        "grounpName": "1D VS 2C",
        "id": 2042
      }
    ]
  },
  {
    "groupName": "1E VS 2F",
    "round": 2,
    "attendees": [
      {
        "round": 2,
        "year": 2018,
        "teamId": 201817,
        "roundGroup": "2_1E VS 2F",
        "grounpName": "1E VS 2F",
        "id": 2051
      },
      {
        "round": 2,
        "year": 2018,
        "teamId": 201822,
        "roundGroup": "2_1E VS 2F",
        "grounpName": "1E VS 2F",
        "id": 2052
      }
    ]
  },
  {
    "groupName": "1F VS 2E",
    "round": 2,
    "attendees": [
      {
        "round": 2,
        "year": 2018,
        "teamId": 201818,
        "roundGroup": "2_1F VS 2E",
        "grounpName": "1F VS 2E",
        "id": 2071
      },
      {
        "round": 2,
        "year": 2018,
        "teamId": 201823,
        "roundGroup": "2_1F VS 2E",
        "grounpName": "1F VS 2E",
        "id": 2072
      }
    ]
  },
  {
    "groupName": "1G VS 2H",
    "round": 2,
    "attendees": [
      {
        "round": 2,
        "year": 2018,
        "teamId": 201825,
        "roundGroup": "2_1G VS 2H",
        "grounpName": "1G VS 2H",
        "id": 2061
      },
      {
        "round": 2,
        "year": 2018,
        "teamId": 201832,
        "roundGroup": "2_1G VS 2H",
        "grounpName": "1G VS 2H",
        "id": 2062
      }
    ]
  },
  {
    "groupName": "1H VS 2G",
    "round": 2,
    "attendees": [
      {
        "round": 2,
        "year": 2018,
        "teamId": 201831,
        "roundGroup": "2_1H VS 2G",
        "grounpName": "1H VS 2G",
        "id": 2081
      },
      {
        "round": 2,
        "year": 2018,
        "teamId": 201828,
        "roundGroup": "2_1H VS 2G",
        "grounpName": "1H VS 2G",
        "id": 2082
      }
    ]
  },
  {
    "groupName": "W49 VS W50",
    "round": 3,
    "attendees": [
      {
        "round": 3,
        "year": 2018,
        "teamId": 201804,
        "roundGroup": "3_W49 VS W50",
        "grounpName": "W49 VS W50",
        "id": 3011
      },
      {
        "round": 3,
        "year": 2018,
        "teamId": 201809,
        "roundGroup": "3_W49 VS W50",
        "grounpName": "W49 VS W50",
        "id": 3012
      }
    ]
  },
  {
    "groupName": "W51 VS W52",
    "round": 3,
    "attendees": [
      {
        "round": 3,
        "year": 2018,
        "teamId": 201823,
        "roundGroup": "3_W51 VS W52",
        "grounpName": "W51 VS W52",
        "id": 3041
      },
      {
        "round": 3,
        "year": 2018,
        "teamId": 201828,
        "roundGroup": "3_W51 VS W52",
        "grounpName": "W51 VS W52",
        "id": 3042
      }
    ]
  },
  {
    "groupName": "W53 VS W54",
    "round": 3,
    "attendees": [
      {
        "round": 3,
        "year": 2018,
        "teamId": 201801,
        "roundGroup": "3_W53 VS W54",
        "grounpName": "W53 VS W54",
        "id": 3021
      },
      {
        "round": 3,
        "year": 2018,
        "teamId": 201815,
        "roundGroup": "3_W53 VS W54",
        "grounpName": "W53 VS W54",
        "id": 3022
      }
    ]
  },
  {
    "groupName": "W55 VS W56",
    "round": 3,
    "attendees": [
      {
        "round": 3,
        "year": 2018,
        "teamId": 201817,
        "roundGroup": "3_W55 VS W56",
        "grounpName": "W55 VS W56",
        "id": 3031
      },
      {
        "round": 3,
        "year": 2018,
        "teamId": 201825,
        "roundGroup": "3_W55 VS W56",
        "grounpName": "W55 VS W56",
        "id": 3032
      }
    ]
  },
  {
    "groupName": "W57 VS W58",
    "round": 4,
    "attendees": [
      {
        "round": 4,
        "year": 2018,
        "teamId": 201809,
        "roundGroup": "4_W57 VS W58",
        "grounpName": "W57 VS W58",
        "id": 4011
      },
      {
        "round": 4,
        "year": 2018,
        "teamId": 201825,
        "roundGroup": "4_W57 VS W58",
        "grounpName": "W57 VS W58",
        "id": 4012
      }
    ]
  },
  {
    "groupName": "W59 VS W60",
    "round": 4,
    "attendees": [
      {
        "round": 4,
        "year": 2018,
        "teamId": 201815,
        "roundGroup": "4_W59 VS W60",
        "grounpName": "W59 VS W60",
        "id": 4021
      },
      {
        "round": 4,
        "year": 2018,
        "teamId": 201828,
        "roundGroup": "4_W59 VS W60",
        "grounpName": "W59 VS W60",
        "id": 4022
      }
    ]
  },
  {
    "groupName": "W61 VS W62",
    "round": 5,
    "attendees": [
      {
        "round": 5,
        "year": 2018,
        "teamId": 201809,
        "roundGroup": "5_W61 VS W62",
        "grounpName": "W61 VS W62",
        "id": 5011
      },
      {
        "round": 5,
        "year": 2018,
        "teamId": 201815,
        "roundGroup": "5_W61 VS W62",
        "grounpName": "W61 VS W62",
        "id": 5012
      }
    ]
  }
];


dummyResponse["/roundScore"] = 
[
  {
    "score": 1,
    "round": 2,
    "year": 2018,
    "teamId": 201801
  },
  {
    "score": 2,
    "round": 2,
    "year": 2018,
    "teamId": 201804
  },
  {
    "score": 1,
    "round": 2,
    "year": 2018,
    "teamId": 201805
  },
  {
    "score": 1,
    "round": 2,
    "year": 2018,
    "teamId": 201806
  },
  {
    "score": 4,
    "round": 2,
    "year": 2018,
    "teamId": 201809
  },
  {
    "score": 1,
    "round": 2,
    "year": 2018,
    "teamId": 201812
  },
  {
    "score": 3,
    "round": 2,
    "year": 2018,
    "teamId": 201813
  },
  {
    "score": 1,
    "round": 2,
    "year": 2018,
    "teamId": 201815
  },
  {
    "score": 2,
    "round": 2,
    "year": 2018,
    "teamId": 201817
  },
  {
    "score": 0,
    "round": 2,
    "year": 2018,
    "teamId": 201818
  },
  {
    "score": 0,
    "round": 2,
    "year": 2018,
    "teamId": 201822
  },
  {
    "score": 1,
    "round": 2,
    "year": 2018,
    "teamId": 201823
  },
  {
    "score": 3,
    "round": 2,
    "year": 2018,
    "teamId": 201825
  },
  {
    "score": 1,
    "round": 2,
    "year": 2018,
    "teamId": 201828
  },
  {
    "score": 1,
    "round": 2,
    "year": 2018,
    "teamId": 201831
  },
  {
    "score": 2,
    "round": 2,
    "year": 2018,
    "teamId": 201832
  },
  {
    "score": 2,
    "round": 3,
    "year": 2018,
    "teamId": 201801
  },
  {
    "score": 0,
    "round": 3,
    "year": 2018,
    "teamId": 201804
  },
  {
    "score": 2,
    "round": 3,
    "year": 2018,
    "teamId": 201809
  },
  {
    "score": 2,
    "round": 3,
    "year": 2018,
    "teamId": 201815
  },
  {
    "score": 1,
    "round": 3,
    "year": 2018,
    "teamId": 201817
  },
  {
    "score": 0,
    "round": 3,
    "year": 2018,
    "teamId": 201823
  },
  {
    "score": 2,
    "round": 3,
    "year": 2018,
    "teamId": 201825
  },
  {
    "score": 2,
    "round": 3,
    "year": 2018,
    "teamId": 201828
  },
  {
    "score": 1,
    "round": 4,
    "year": 2018,
    "teamId": 201809
  },
  {
    "score": 2,
    "round": 4,
    "year": 2018,
    "teamId": 201815
  },
  {
    "score": 0,
    "round": 4,
    "year": 2018,
    "teamId": 201825
  },
  {
    "score": 1,
    "round": 4,
    "year": 2018,
    "teamId": 201828
  },
  {
    "score": 4,
    "round": 5,
    "year": 2018,
    "teamId": 201809
  },
  {
    "score": 2,
    "round": 5,
    "year": 2018,
    "teamId": 201815
  }
];



dummyResponse["/bet"] = 
[
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 1,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 3,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 4,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 5,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 6,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 8,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 10,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 11,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 12,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 13,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 14,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 15,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 16,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 17,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 18,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 19,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 21,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 22,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 23,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 24,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 25,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 26,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 28,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 29,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 30,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 31,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 32,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2011,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2012,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2021,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2022,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2031,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2032,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2041,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2052,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2061,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2071,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2072,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 2082,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 3011,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 3012,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 3021,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 3022,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 3031,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 3032,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 3041,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 4011,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 4012,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 4021,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 4022,
    "userId": 3
  },
  {
    "bet": false,
    "fbId": "10217138133391981",
    "roundAttendeeId": 5011,
    "userId": 3
  },
  {
    "bet": true,
    "fbId": "10217138133391981",
    "roundAttendeeId": 5012,
    "userId": 3
  },
  {
    "bet": true,
    "roundAttendeeId": 14,
    "userId": 4
  },
  {
    "bet": true,
    "roundAttendeeId": 19,
    "userId": 4
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 1,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 3,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 4,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 5,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 6,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 7,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 8,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 9,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 10,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 11,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 12,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 13,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 14,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 15,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 17,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 18,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 19,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 21,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 22,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 23,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 25,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 26,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 27,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 28,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 29,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 30,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 31,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 32,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2011,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2021,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2022,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2031,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2041,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2051,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2052,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2061,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2071,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2072,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2081,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 2082,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 3011,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 3012,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 3021,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 3022,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 3031,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 3032,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 3041,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 3042,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 4011,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 4021,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 4022,
    "userId": 6
  },
  {
    "bet": false,
    "fbId": "10160358017720307",
    "roundAttendeeId": 5011,
    "userId": 6
  },
  {
    "bet": true,
    "fbId": "10160358017720307",
    "roundAttendeeId": 5012,
    "userId": 6
  },
  {
    "bet": true,
    "roundAttendeeId": 6,
    "userId": 7
  },
  {
    "bet": true,
    "roundAttendeeId": 15,
    "userId": 7
  },
  {
    "bet": true,
    "roundAttendeeId": 24,
    "userId": 7
  },
  {
    "bet": false,
    "roundAttendeeId": 29,
    "userId": 7
  },
  {
    "bet": true,
    "roundAttendeeId": 30,
    "userId": 7
  },
  {
    "bet": false,
    "roundAttendeeId": 31,
    "userId": 7
  },
  {
    "bet": true,
    "roundAttendeeId": 32,
    "userId": 7
  },
  {
    "bet": true,
    "roundAttendeeId": 3,
    "userId": 9
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 1,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 3,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 4,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 5,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 6,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 7,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 8,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 9,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 10,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 11,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 12,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 13,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 14,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 15,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 16,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 17,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 18,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 19,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 20,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 21,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 22,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 23,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 24,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 25,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 26,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 27,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 28,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 29,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 30,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 31,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 32,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2011,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2012,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2021,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2031,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2032,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2041,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2042,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2051,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2052,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2061,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2062,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2071,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2072,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 2082,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 3011,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 3021,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 3022,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 3031,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 3032,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 3041,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 3042,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 4011,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 4012,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 4021,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 4022,
    "userId": 10
  },
  {
    "bet": false,
    "fbId": "2033761206635296",
    "roundAttendeeId": 5011,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2033761206635296",
    "roundAttendeeId": 5012,
    "userId": 10
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 1,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 4,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 5,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 6,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 9,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 11,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 12,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 13,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 15,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 16,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 17,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 18,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 19,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 21,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 22,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 25,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 28,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 29,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 31,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 32,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2012,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2021,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2022,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2031,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2032,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2041,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2051,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2061,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2062,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2071,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2072,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 2082,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 3012,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 3021,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 3022,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 3031,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 3032,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 3041,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 3042,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 4011,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 4012,
    "userId": 11
  },
  {
    "bet": false,
    "fbId": "2013032825373802",
    "roundAttendeeId": 4021,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 4022,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2013032825373802",
    "roundAttendeeId": 5011,
    "userId": 11
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 1,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 4,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 5,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 6,
    "userId": 12
  },
  {
    "bet": false,
    "fbId": "2015490698524241",
    "roundAttendeeId": 8,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 9,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 12,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 13,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 16,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 17,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 18,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 21,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 22,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 25,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 28,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 29,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 31,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 2011,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 2021,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 2031,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 2041,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 2051,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 2061,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 2072,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 2082,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 3012,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 3022,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 3031,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 3042,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 4011,
    "userId": 12
  },
  {
    "bet": false,
    "fbId": "2015490698524241",
    "roundAttendeeId": 4012,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 4022,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "2015490698524241",
    "roundAttendeeId": 5012,
    "userId": 12
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 1,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 4,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 5,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 6,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 9,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 12,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 13,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 16,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 17,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 18,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 21,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 24,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 25,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 28,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 30,
    "userId": 13
  },
  {
    "bet": false,
    "fbId": "1788799031159066",
    "roundAttendeeId": 31,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 32,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 2011,
    "userId": 13
  },
  {
    "bet": false,
    "fbId": "1788799031159066",
    "roundAttendeeId": 2012,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 2021,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 2031,
    "userId": 13
  },
  {
    "bet": false,
    "fbId": "1788799031159066",
    "roundAttendeeId": 2032,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 2041,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 2051,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 2061,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 2071,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 2082,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 3012,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 3021,
    "userId": 13
  },
  {
    "bet": false,
    "fbId": "1788799031159066",
    "roundAttendeeId": 3022,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 3031,
    "userId": 13
  },
  {
    "bet": false,
    "fbId": "1788799031159066",
    "roundAttendeeId": 3032,
    "userId": 13
  },
  {
    "bet": false,
    "fbId": "1788799031159066",
    "roundAttendeeId": 3041,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 3042,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 4011,
    "userId": 13
  },
  {
    "bet": false,
    "fbId": "1788799031159066",
    "roundAttendeeId": 4012,
    "userId": 13
  },
  {
    "bet": false,
    "fbId": "1788799031159066",
    "roundAttendeeId": 4021,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 4022,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "1788799031159066",
    "roundAttendeeId": 5011,
    "userId": 13
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 1,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 3,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 4,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 5,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 6,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 7,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 8,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 9,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 10,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 11,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 12,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 13,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 14,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 16,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 17,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 18,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 19,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 20,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 21,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 22,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 23,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 24,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 25,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 26,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 27,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 28,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 29,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 30,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 31,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 32,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2012,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2021,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2031,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2032,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2041,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2042,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2051,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2061,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2062,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2071,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2072,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 2081,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 3012,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 3021,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 3022,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 3031,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 3032,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 3041,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 3042,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 4011,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 4012,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 4021,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 4022,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "2131499633545082",
    "roundAttendeeId": 5011,
    "userId": 14
  },
  {
    "bet": false,
    "fbId": "2131499633545082",
    "roundAttendeeId": 5012,
    "userId": 14
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 1,
    "userId": 15
  },
  {
    "bet": false,
    "fbId": "10216161254965335",
    "roundAttendeeId": 3,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 4,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 6,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 8,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 9,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 12,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 13,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 16,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 17,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 19,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 21,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 22,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 25,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 28,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 30,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 31,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 2011,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 2022,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 2031,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 2041,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 2051,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 2062,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 2071,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 2082,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 3012,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 3021,
    "userId": 15
  },
  {
    "bet": false,
    "fbId": "10216161254965335",
    "roundAttendeeId": 3031,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 3032,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 3041,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 4011,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 4021,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "10216161254965335",
    "roundAttendeeId": 5011,
    "userId": 15
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 1,
    "userId": 16
  },
  {
    "bet": false,
    "fbId": "2094279473916782",
    "roundAttendeeId": 2,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 4,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 5,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 6,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 9,
    "userId": 16
  },
  {
    "bet": false,
    "fbId": "2094279473916782",
    "roundAttendeeId": 11,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 12,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 13,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 14,
    "userId": 16
  },
  {
    "bet": false,
    "fbId": "2094279473916782",
    "roundAttendeeId": 15,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 17,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 18,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 21,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 23,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 25,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 28,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 29,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 31,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 2011,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 2021,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 2031,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 2041,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 2051,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 2061,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 2071,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 2082,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 3011,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 3021,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 3032,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 3041,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 4011,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 4022,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "2094279473916782",
    "roundAttendeeId": 5011,
    "userId": 16
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 1,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 3,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 4,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 5,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 6,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 9,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 12,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 13,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 15,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 17,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 19,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 21,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 23,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 25,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 28,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 29,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 31,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 32,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2012,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2021,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2022,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2031,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2032,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2041,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2051,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2052,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2061,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2062,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2071,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2072,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2081,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 2082,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 3011,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 3012,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 3021,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 3022,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 3031,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 3032,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 3041,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 3042,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 4011,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 4012,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 4021,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 4022,
    "userId": 18
  },
  {
    "bet": false,
    "fbId": "10214871448287081",
    "roundAttendeeId": 5011,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "10214871448287081",
    "roundAttendeeId": 5012,
    "userId": 18
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 1,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 4,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 5,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 6,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 9,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 12,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 13,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 15,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 17,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 18,
    "userId": 20
  },
  {
    "bet": false,
    "fbId": "2012315838779325",
    "roundAttendeeId": 20,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 21,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 23,
    "userId": 20
  },
  {
    "bet": false,
    "fbId": "2012315838779325",
    "roundAttendeeId": 24,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 25,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 28,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 29,
    "userId": 20
  },
  {
    "bet": false,
    "fbId": "2012315838779325",
    "roundAttendeeId": 30,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 32,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 2011,
    "userId": 20
  },
  {
    "bet": false,
    "fbId": "2012315838779325",
    "roundAttendeeId": 2012,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 2022,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 2031,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 2041,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 2051,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 2062,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 2072,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 2082,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 3012,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 3022,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 3032,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 3042,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 4011,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 4022,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "2012315838779325",
    "roundAttendeeId": 5011,
    "userId": 20
  },
  {
    "bet": false,
    "fbId": "2012315838779325",
    "roundAttendeeId": 5012,
    "userId": 20
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 1,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 3,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 5,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 6,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 9,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 12,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 13,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 15,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 17,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 20,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 21,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 24,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 25,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 28,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 31,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 32,
    "userId": 21
  },
  {
    "bet": false,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2011,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2012,
    "userId": 21
  },
  {
    "bet": false,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2021,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2022,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2031,
    "userId": 21
  },
  {
    "bet": false,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2032,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2041,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2051,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2061,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2071,
    "userId": 21
  },
  {
    "bet": false,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2072,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 2082,
    "userId": 21
  },
  {
    "bet": false,
    "fbId": "10217276197363612",
    "roundAttendeeId": 3011,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 3012,
    "userId": 21
  },
  {
    "bet": false,
    "fbId": "10217276197363612",
    "roundAttendeeId": 3021,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 3022,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 3031,
    "userId": 21
  },
  {
    "bet": false,
    "fbId": "10217276197363612",
    "roundAttendeeId": 3032,
    "userId": 21
  },
  {
    "bet": false,
    "fbId": "10217276197363612",
    "roundAttendeeId": 3041,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 3042,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 4011,
    "userId": 21
  },
  {
    "bet": false,
    "fbId": "10217276197363612",
    "roundAttendeeId": 4012,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 4022,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "10217276197363612",
    "roundAttendeeId": 5011,
    "userId": 21
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 3,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 4,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 5,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 6,
    "userId": 23
  },
  {
    "bet": false,
    "fbId": "2224049340955153",
    "roundAttendeeId": 7,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 9,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 12,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 13,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 16,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 17,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 19,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 21,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 22,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 25,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 28,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 30,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 31,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 2012,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 2021,
    "userId": 23
  },
  {
    "bet": false,
    "fbId": "2224049340955153",
    "roundAttendeeId": 2022,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 2032,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 2041,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 2051,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 2061,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 2071,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 2082,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 3012,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 3021,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 3031,
    "userId": 23
  },
  {
    "bet": false,
    "fbId": "2224049340955153",
    "roundAttendeeId": 3032,
    "userId": 23
  },
  {
    "bet": false,
    "fbId": "2224049340955153",
    "roundAttendeeId": 3041,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 3042,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 4012,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 4022,
    "userId": 23
  },
  {
    "bet": false,
    "fbId": "2224049340955153",
    "roundAttendeeId": 5011,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "2224049340955153",
    "roundAttendeeId": 5012,
    "userId": 23
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 1,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 4,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 5,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 6,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 9,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 11,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 13,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 2012,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 2021,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 2031,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 2041,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 2051,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 2061,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 2071,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 2081,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 3012,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 3022,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 3031,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 3042,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 4012,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 4021,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "1953727824638452",
    "roundAttendeeId": 5012,
    "userId": 24
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 1,
    "userId": 25
  },
  {
    "bet": false,
    "fbId": "10204797453412047",
    "roundAttendeeId": 3,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 4,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 5,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 6,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 9,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 10,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 13,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 15,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 17,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 18,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 21,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 22,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 25,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 28,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 31,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 32,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 2012,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 2021,
    "userId": 25
  },
  {
    "bet": false,
    "fbId": "10204797453412047",
    "roundAttendeeId": 2022,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 2031,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 2041,
    "userId": 25
  },
  {
    "bet": false,
    "fbId": "10204797453412047",
    "roundAttendeeId": 2042,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 2051,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 2061,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 2072,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 2082,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 3012,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 3021,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 3031,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 3042,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 4011,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 4021,
    "userId": 25
  },
  {
    "bet": false,
    "fbId": "10204797453412047",
    "roundAttendeeId": 4022,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "10204797453412047",
    "roundAttendeeId": 5011,
    "userId": 25
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 1,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 4,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 5,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 6,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 9,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 12,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 13,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 15,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 17,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 18,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 21,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 22,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 25,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 28,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 29,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "220806331852306",
    "roundAttendeeId": 31,
    "userId": 26
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 1,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 3,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 5,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 6,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 9,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 12,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 13,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 15,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 17,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 18,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 21,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 22,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 25,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 28,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 29,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 30,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 2012,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 2022,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 2031,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 2041,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 2051,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 2061,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 2072,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 2082,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 3012,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 3022,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 3032,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 3042,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 4011,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 4022,
    "userId": 27
  },
  {
    "bet": false,
    "fbId": "2183668661649623",
    "roundAttendeeId": 5011,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "2183668661649623",
    "roundAttendeeId": 5012,
    "userId": 27
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 1,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 4,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 5,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 6,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 9,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 12,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 13,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 16,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 17,
    "userId": 28
  },
  {
    "bet": false,
    "fbId": "185741508750785",
    "roundAttendeeId": 18,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 19,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 21,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 23,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 25,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 28,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 30,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 31,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 2011,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 2021,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 2031,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 2042,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 2051,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 2061,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 2072,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 2081,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 3011,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 3022,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 3031,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 3041,
    "userId": 28
  },
  {
    "bet": false,
    "fbId": "185741508750785",
    "roundAttendeeId": 4011,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 4012,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 4021,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "185741508750785",
    "roundAttendeeId": 5012,
    "userId": 28
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 1,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 4,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 5,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 6,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 9,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 11,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 13,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 16,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 17,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 19,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 21,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 22,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 27,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 28,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 31,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 32,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 2011,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 2022,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 2031,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 2042,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 2051,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 2061,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 2072,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 2082,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 3012,
    "userId": 29
  },
  {
    "bet": false,
    "fbId": "2123004967715380",
    "roundAttendeeId": 3021,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 3022,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 3032,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 3041,
    "userId": 29
  },
  {
    "bet": false,
    "fbId": "2123004967715380",
    "roundAttendeeId": 3042,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 4012,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 4022,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "2123004967715380",
    "roundAttendeeId": 5012,
    "userId": 29
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 1,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 4,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 5,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 6,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 9,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 12,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 13,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 15,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 17,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 18,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 21,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 22,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 25,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 28,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 29,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 31,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 2011,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 2021,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 2031,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 2041,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 2051,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 2061,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 2072,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 2082,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 3012,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 3022,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 3031,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 3042,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 4011,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 4022,
    "userId": 30
  },
  {
    "bet": false,
    "fbId": "10209758085063486",
    "roundAttendeeId": 5011,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "10209758085063486",
    "roundAttendeeId": 5012,
    "userId": 30
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 1,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 4,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 5,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 6,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 9,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 10,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 12,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 13,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 16,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 17,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 18,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 19,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 21,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 22,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 25,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 28,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 29,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 31,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 32,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2011,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2012,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2021,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2022,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2031,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2032,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2041,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2051,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2052,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2061,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2062,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2071,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2072,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2081,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 2082,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 3011,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 3022,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 3032,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 3041,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 3042,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 4011,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 4022,
    "userId": 32
  },
  {
    "bet": false,
    "fbId": "1561353450653465",
    "roundAttendeeId": 5011,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "1561353450653465",
    "roundAttendeeId": 5012,
    "userId": 32
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 1,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 4,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 5,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 6,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 9,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 12,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 13,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 15,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 17,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 20,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 21,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 22,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 25,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 28,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 31,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 32,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 2012,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 2022,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 2031,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 2041,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 2051,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 2061,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 2071,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 2082,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 3012,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 3021,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 3031,
    "userId": 34
  },
  {
    "bet": false,
    "fbId": "189949558355586",
    "roundAttendeeId": 3041,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 3042,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 4011,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 4022,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "189949558355586",
    "roundAttendeeId": 5011,
    "userId": 34
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 2011,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 2021,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 2031,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 2042,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 2051,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 2062,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 2072,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 2082,
    "userId": 36
  },
  {
    "bet": false,
    "fbId": "10156453640183839",
    "roundAttendeeId": 3011,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 3012,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 3022,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 3031,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 3042,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 4012,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 4021,
    "userId": 36
  },
  {
    "bet": true,
    "fbId": "10156453640183839",
    "roundAttendeeId": 5011,
    "userId": 36
  }
];