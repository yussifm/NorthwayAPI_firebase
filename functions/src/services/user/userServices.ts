import { Response, Request } from "express";
import { fireDb } from "../../config/firebaseconfig";
import { UserDto } from "./userDto";
// import * as functions from "firebase-functions";

const UserDatabaseName = "user";

const Adduser = async (user: any) => {
	let userObject: UserDto;
	try {
		const userRepo = await fireDb.collection(UserDatabaseName).doc(user.uid);
		userObject = {
			username: user.displayName,

			role: "user",
			email: user.email,
			telephone: user.phoneNumber,
			createdAt: "",
		};

		await userRepo.set(userObject);
		return { message: "user created", data: userObject };
	} catch (error) {
		return error;
	}
};

// const Updateuser = async (req: Request, res: Response) => {
// 	const { name, phone } = req.query;
// 	try {
// 	} catch (error) {}
// };

const GetAllusers = async (req: Request, res: Response) => {
	try {
		const users = fireDb.collection(UserDatabaseName).get();
		const getUsers = (await users).docs;
		const Snapdata = await getUsers.map((user: any) => user.data());
		res.status(200).json(Snapdata);
	} catch (error) {
		res.status(500).json(error);
	}
};
const Deleteuser = async (user: any) => {
	try {
		const userRepo = await fireDb.collection(UserDatabaseName).doc(user.uid);
		return userRepo.delete();
	} catch (error) {
		return error;
	}
};
const GetUserId = async (req: Request, res: Response) => {};
const GetUsername = async (req: Request, res: Response) => {};

export {
	Adduser,
	Deleteuser,
	GetUserId,
	GetUsername,
	GetAllusers,
	UserDatabaseName,
};
