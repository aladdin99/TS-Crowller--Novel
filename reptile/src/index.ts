import express,{Request, Response, NextFunction} from "express"
import bodyParser from 'body-parser';
import router from "./router";
// 引用持久存储
import cookieSession from "cookie-session"

const app = express();
app.use(cookieSession({
    name: "session",
    keys: ['teacher dell'],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req:Request, res:Response, next:NextFunction)=>{
    req.teacherName = "dell";
    next();
});
app.use(router);

app.listen("8099",()=>{
    console.log("server is running!");
});