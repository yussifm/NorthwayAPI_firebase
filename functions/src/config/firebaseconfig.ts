import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import "firebase-functions";


admin.initializeApp(functions.config().firebase);

const fireDb = admin.firestore();

const fireStorage = admin.storage();

export { fireDb, admin,  fireStorage };
