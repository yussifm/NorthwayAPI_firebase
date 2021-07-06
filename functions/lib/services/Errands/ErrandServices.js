"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrandDatabaseName = exports.UpdateErrand = exports.GetAllErrands = exports.GetErrandname = exports.GetErrandId = exports.DeleteErrand = exports.AddErrand = void 0;
const firebaseconfig_1 = require("../../config/firebaseconfig");
const ErrandDatabaseName = "Errands";
exports.ErrandDatabaseName = ErrandDatabaseName;
const AddErrand = async (req, res) => {
    const { title, description } = req.body;
    try {
        const ErrandRepo = await firebaseconfig_1.fireDb.collection(ErrandDatabaseName).doc();
        const ErrandObject = {
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
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.AddErrand = AddErrand;
const UpdateErrand = async (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;
    try {
        const ErrandRepo = await firebaseconfig_1.fireDb.collection(ErrandDatabaseName).doc(id);
        const currentErrand = (await ErrandRepo.get()).data() || {};
        const updateObject = {
            id: currentErrand.id,
            title: title || currentErrand.title,
            description: description || currentErrand.description,
        };
        await ErrandRepo.set(updateObject);
        return res.status(200).send({
            message: "Updated successfully",
            data: updateObject,
        });
    }
    catch (error) {
        return res.status(500).send({
            message: error,
        });
    }
};
exports.UpdateErrand = UpdateErrand;
const GetAllErrands = async (req, res) => {
    const Errands = firebaseconfig_1.fireDb.collection(ErrandDatabaseName).get();
    try {
        const getErrands = (await Errands).docs;
        const Snapdata = await getErrands.map((errand) => errand.data());
        return res.status(200).json(Snapdata);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.GetAllErrands = GetAllErrands;
const DeleteErrand = async (req, res) => {
    const { id } = req.params;
    try {
        const ErrandRepo = firebaseconfig_1.fireDb.collection(ErrandDatabaseName).doc(id);
        await ErrandRepo.delete();
        return res.status(200).send({
            message: "Errand deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            error,
        });
    }
};
exports.DeleteErrand = DeleteErrand;
const GetErrandId = async (req, res) => { };
exports.GetErrandId = GetErrandId;
const GetErrandname = async (req, res) => { };
exports.GetErrandname = GetErrandname;
//# sourceMappingURL=ErrandServices.js.map