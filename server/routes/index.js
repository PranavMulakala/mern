import {Router } from "express";
import TransactionsAPI from "./TransactionsAPI.js"; 
import AuthApi from "./AuthApi.js";
import UserAPI from "./UserApi.js";
import passport from "passport";
const router = Router();
const auth = passport.authenticate("jwt",{ session: false});
import CategoryApi from "./CategoryApi.js"

router.use("/transaction", auth, TransactionsAPI);
router.use("/auth",AuthApi);
router.use("/user", UserAPI);
router.use("/category", auth, CategoryApi);

export default router;
