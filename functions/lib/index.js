"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const express = require("express");
const userController_1 = require("./controller/user/userController");
const productController_1 = require("./controller/product/productController");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(userController_1.default);
app.use(productController_1.default);
exports.app = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map