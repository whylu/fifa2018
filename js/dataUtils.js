var DataUtils = function() {
    this.setDataHandler = function(dataHandler){
        this.dataHandler = dataHandler;
    }
    
    this.fetch = function(request) {
        this.checkHandler();
        return this.dataHandler.sendRequest_(request);
    }
    
    this.checkHandler = function() {
        if(this.dataHandler==null) {
            throw "Please call setDataHandler(dataHandler) before use it.";
        }
    }
    
}

var DataHandler = function() {
    this.sendRequest_ = function(request) {
        if(this.sendRequest==null || typeof this.sendRequest !== "function") {
            throw "sendRequest(request) not implemented!!";
        }
        return this.sendRequest(request);
    }
        
}
const dataHandler = new DataHandler();

