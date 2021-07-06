import * as express from "express";
import {
	
	GetAllusers,
	GetUserId,
	GetUsername,

} from "../../services/user/userServices";

const userController = express.Router();

userController.get("/user", GetAllusers);
userController.get("/user/:id", GetUserId);
userController.get("/user/:name", GetUsername);

export default userController;