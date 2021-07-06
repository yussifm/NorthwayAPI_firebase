import * as functions from "firebase-functions";
import * as cors from "cors";

import * as express from "express";
import userController from "./controller/user/userController";
import ProductController from "./controller/product/productController";
import { ErrandsController } from "./controller/Errands/ErrandsControll";
import { Adduser, Deleteuser } from "./services/user/userServices";
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors);


app.use(userController);
app.use(ProductController);
app.use(ErrandsController);

exports.app = functions.https.onRequest(app);
exports.adduser = functions.auth.user().onCreate((user) => {
	return Adduser(user);
});
exports.deleteuser = functions.auth.user().onDelete((user) => {
	return Deleteuser(user);
});
