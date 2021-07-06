"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fireStorage = exports.fireAuth = exports.admin = exports.fireDb = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
exports.admin = admin;
require("firebase-functions");
admin.initializeApp(functions.config().firebase);
const fireDb = admin.firestore();
exports.fireDb = fireDb;
const fireAuth = admin.auth();
exports.fireAuth = fireAuth;
const fireStorage = admin.storage();
exports.fireStorage = fireStorage;
//# sourceMappingURL=firebaseconfig.js.map