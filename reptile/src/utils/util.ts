interface Result {
    success: Boolean;
    errMsg?: string;
    data: any;
}

// 统一接口数据结构
export const getResponseData = (data:any, errMsg?:string):Result =>{
    if(errMsg){
        return {
            success: false,
            errMsg: errMsg,
            data: data
        }
    }
    return {
        success: true,
        data
    }
}