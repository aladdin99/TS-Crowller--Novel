import fs from "fs"
import path from "path"
import { Router, Request, Response, NextFunction } from "express";
import getShuQiList from "./controller/ShuqiController"
import { getResponseData } from "./utils/util"


// 解析 request 返回的参数
const Url = require('url-parse');

const router = Router();

// 重定义接口方式
interface RequestWithBody extends Request {
    body:{
        [key:string]: string|undefined
    }
}

// 登陆中间件，预先判断是否登陆。
const checkLogin = (_req:Request, _res:Response, next:NextFunction)=>{
    const isLogin = _req.session ? _req.session.login : false;
    if(isLogin){
        next();
    }else{
        _res.json(getResponseData("null", "请先登陆！"));
    }
}

// 主页
router.get("/", (_req:Request, _res:Response)=>{
    const isLogin = _req.session ? _req.session.login : false;
    if(isLogin){
        _res.send(`
            <html>
                <body>
                    <a href="/getData">爬取内容</a>
                    <a href="/showData">展示内容</a>
                    <a href="/logout">退出</a>
                </body>
            </html>
        `);
    }else{
        _res.send(`
            <html>
                <body>
                    <form method="post" action="/login">
                        <input type="password" name="password"/>
                        <button>登录</button>
                    </form>
                </body>
            </html>
        `);
    }
});

// 退出
router.get("/logout", (_req:RequestWithBody, _res:Response)=>{
    if(_req.session){
        _req.session.login = false;
    }
    _res.json(getResponseData(true));
});

// 登陆
router.post("/login", (_req:RequestWithBody, _res:Response)=>{
    let { password } = _req.body;
    const isLogin = _req.session ? _req.session.login : false;
    if(isLogin){
        _res.json(getResponseData(false, "已经登陆过"));
    }else{
        if( password === '123'  &&  _req.session){
            _req.session.login = true;
            _res.json(getResponseData(true));
            // _res.redirect('/');
        }else{
            _res.json(getResponseData(false, "登录失败"));
        }
    }
});

// 爬取数据
router.get("/getData", checkLogin, (_req:RequestWithBody, _res:Response)=>{
    getShuQiList();
    _res.json(getResponseData(true));
});

// 展示数据
router.get("/showData", checkLogin, (_req:RequestWithBody, _res:Response)=>{
    try{
        const position = path.resolve(__dirname,'../data/书旗小说网/recommendList.json');
        const result = fs.readFileSync(position, 'utf8');
        _res.json(getResponseData(JSON.parse(result)));

    }catch(e){
        _res.json(getResponseData(false, "数据不存在！"));
    }
});

export default router;