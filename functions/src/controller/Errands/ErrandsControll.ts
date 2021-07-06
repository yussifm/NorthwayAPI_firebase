
import {
	AddErrand,
	DeleteErrand,
	GetErrandQuery,
	GetAllErrands,
	UpdateErrand,
} from "../../services/Errands/ErrandServices";

import * as express from "express";

const ErrandsController = express.Router();

ErrandsController.get("/errand", GetAllErrands);
ErrandsController.post("/errand", AddErrand);
ErrandsController.get("/errand/:search", GetErrandQuery);
ErrandsController.patch("/errand/:id", UpdateErrand);
ErrandsController.delete("/errand/:id", DeleteErrand);
export { ErrandsController };