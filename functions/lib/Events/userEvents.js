"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.createUser = functions.firestore
    .document("users/{userId}")
    .onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    // const newValue = snap.data();
    // access a particular field as you would any JS property
    // const name = newValue.name;
    // perform desired operations ...
});
//# sourceMappingURL=userEvents.js.map