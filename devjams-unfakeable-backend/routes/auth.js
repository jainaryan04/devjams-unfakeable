// server/routes/auth.js
import express from 'express';
import admin from '../firebaseAdmin.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.split(' ')[1];

  try {
    // Verify the token
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    // Proceed with your custom authentication logic
    // E.g., create a user in your database if not exists
    console.log('User UID:', uid);

    res.status(200).json({ message: 'User authenticated successfully' });
  } catch (error) {
    console.error('Error verifying Firebase token:', error);
    res.status(401).json({ message: 'Authentication failed' });
  }
});

export default router;
