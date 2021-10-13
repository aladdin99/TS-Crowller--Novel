enum Status {
    OFFLINE = 2,
    ONLINE,
    DELETED
}

function getResult(status:any){
    if(status == Status.OFFLINE){
        return "OFFLINE"
    }else if(status == Status.ONLINE){
        return "ONLINE"
    }else if(status == Status.DELETED){
        return "DELETED"
    }
    return "error!"
}

console.log(Status[2] , Status.OFFLINE);
let result = getResult(1);
console.log(result);