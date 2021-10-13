import express,{Request, Response} from "express"

const app = express();

app.get("/", (_req:Request, _res:Response)=>{
    _res.send(_req.body);
});

app.listen("8099",()=>{
    console.log("server is running!");
});