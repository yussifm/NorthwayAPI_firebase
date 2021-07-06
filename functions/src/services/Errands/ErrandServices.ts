import { Response, Request } from "express";
import { fireDb } from "../../config/firebaseconfig";
import { ErrandDto } from "./errandDto";

const ErrandDatabaseName = "Errands";

const AddErrand = async (req: Request, res: Response) => {
	const { title, description } = req.body;

	try {
		const ErrandRepo = await fireDb.collection(ErrandDatabaseName).doc();
		const ErrandObject: ErrandDto = {
			id: ErrandRepo.id,
			title: title,
			description: description,
			iscompleted: false,
			createdAt: "firebase date",
		};
		await ErrandRepo.set(ErrandObject);
		return res.status(200).send({
			message: "Errand created successfully",
			data: ErrandObject,
		});
	} catch (error) {
		return res.status(500).json(error);
	}
};

const UpdateErrand = async (req: Request, res: Response) => {
	const { title, description } = req.body;
	const { id } = req.params;

	try {
		const ErrandRepo = await fireDb.collection(ErrandDatabaseName).doc(id);
		const currentErrand = (await ErrandRepo.get()).data() || {};
		const updateObject: ErrandDto = {
			id: currentErrand.id,
			title: title || currentErrand.title,
			description: description || currentErrand.description,
		};

		await ErrandRepo.set(updateObject);
		return res.status(200).send({
			message: "Updated successfully",
			data: updateObject,
		});
	} catch (error) {
		return res.status(500).send({
			message: error,
		});
	}
};

const GetAllErrands = async (req: Request, res: Response) => {
	try {
		const Errands = fireDb.collection(ErrandDatabaseName).get();
		const getErrands = (await Errands).docs;
		const Snapdata = await getErrands.map((errand: any) => errand.data());
		return res.status(200).json(Snapdata);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const DeleteErrand = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const ErrandRepo = fireDb.collection(ErrandDatabaseName).doc(id);
		await ErrandRepo.delete();
		return res.status(200).send({
			message: "Errand deleted successfully",
		});
	} catch (error) {
		return res.status(500).json({
			error,
		});
	}
};
const GetErrandQuery = async (req: Request, res: Response) => {
	const { search } = req.query;
	try {
		const Errands = fireDb
			.collection(ErrandDatabaseName)
			.where("title" || "description", ">=", search)
			.get();
		const filteredErrs = (await Errands).docs || [];
		return res.status(200).json({
			data: filteredErrs,
		});
	} catch (error) {
		return res.status(500).json({
			error,
		});
	}
};

export {
	AddErrand,
	DeleteErrand,
	GetAllErrands,
	GetErrandQuery,
	UpdateErrand,
	ErrandDatabaseName,
};
