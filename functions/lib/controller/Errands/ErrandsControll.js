"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrandServices_1 = require("../../services/Errands/ErrandServices");
const express = require("express");
const ErrandsController = express.Router();
ErrandsController.get("/errand", ErrandServices_1.GetAllErrands);
ErrandsController.post("/errand", ErrandServices_1.AddErrand);
ErrandsController.get("/errand/:name", ErrandServices_1.GetErrandname);
ErrandsController.get("/errand/:id", ErrandServices_1.GetErrandId);
ErrandsController.patch("/errand/:id", ErrandServices_1.UpdateErrand);
ErrandsController.delete("/errand/:id", ErrandServices_1.DeleteErrand);
//# sourceMappingURL=ErrandsControll.js.map