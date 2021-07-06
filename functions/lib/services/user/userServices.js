"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabaseName = exports.Updateuser = exports.GetAllusers = exports.GetUsername = exports.GetUserId = exports.Deleteuser = exports.Adduser = void 0;
const firebaseconfig_1 = require("../../config/firebaseconfig");
const UserDatabaseName = "user";
exports.UserDatabaseName = UserDatabaseName;
const Adduser = async (req, res) => {
    const { name, password } = req.body;
    const userRepo = await firebaseconfig_1.fireDb.collection(UserDatabaseName).doc();
    try {
        await userRepo.set({ name: name, password: password });
        res.status(200).send({
            message: "User created successfully",
            data: { name: name, password: password }
        });
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.Adduser = Adduser;
const Updateuser = async (req, res) => { };
exports.Updateuser = Updateuser;
const GetAllusers = async (req, res) => {
    const users = firebaseconfig_1.fireDb.collection(UserDatabaseName).get();
    try {
        const getUsers = (await users).docs;
        const Snapdata = await getUsers.map((user) => user.data());
        res.status(200).json(Snapdata);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.GetAllusers = GetAllusers;
const Deleteuser = async (req, res) => { };
exports.Deleteuser = Deleteuser;
const GetUserId = async (req, res) => { };
exports.GetUserId = GetUserId;
const GetUsername = async (req, res) => { };
exports.GetUsername = GetUsername;
//# sourceMappingURL=userServices.js.map