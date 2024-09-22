import admin from 'firebase-admin';
import { readFile } from 'fs/promises'; 

const initializeFirebaseAdmin = async () => {
    try {
        const serviceAccount = await readFile("D:\\Prog\\devjams-unfakeable-backend\\deepfake-383f8-firebase-adminsdk-q7m7h-1b15a6c62f.json", 'utf-8');
        const serviceAccountKey = JSON.parse(serviceAccount);

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccountKey),
        });
        console.log('Firebase Admin SDK initialized successfully');
    } catch (error) {
        console.error('Error initializing Firebase Admin SDK:', error);
        process.exit(1);
    }
};

initializeFirebaseAdmin();
export default admin;
