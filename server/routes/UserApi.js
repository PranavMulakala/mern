import { Router } from "express";
const router = Router();
import passport from "passport";
import * as UserController from '../controller/UserController.js'


router.get('/',passport.authenticate("jwt",{ session: false}), 
UserController.index
)


export default router;