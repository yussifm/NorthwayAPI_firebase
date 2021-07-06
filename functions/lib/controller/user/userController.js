"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userServices_1 = require("../../services/user/userServices");
const userController = express.Router();
userController.get("/user", userServices_1.GetAllusers);
userController.post("/user", userServices_1.Adduser);
userController.get("/user/:id", userServices_1.GetUserId);
userController.get("/user/:name", userServices_1.GetUsername);
userController.patch("/user/:id", userServices_1.Updateuser);
userController.delete("/user/:id", userServices_1.Deleteuser);
exports.default = userController;
//# sourceMappingURL=userController.js.map