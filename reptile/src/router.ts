import { Router, Request, Response } from "express";
import getShuQiList from "./controller/ShuqiController"

const router = Router();
router.get("/", (_req:Request, _res:Response)=>{
    _res.send(`<div style="color:red;font-size:100px;">党</div>`);
});
router.get("/getData", (_req:Request, _res:Response)=>{
    getShuQiList();
    _res.send(`<div>获取数据</div>`);
});
export default router;