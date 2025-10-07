const admin = require("firebase-admin");
const serviceAccount = require("../../firebase-credentials.json"); // Asegúrate de tener este archivo

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { db, bucket };