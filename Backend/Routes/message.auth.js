import  express  from "express";
import {sendMassage ,getMessage} from '../Controllers/message.controller.js';
import protectRoute from "../midlewere/protectedRoute.js";
const router=express.Router();

router.get("/:id",protectRoute,getMessage);
router.post("/send/:id",protectRoute,sendMassage);


export default router;