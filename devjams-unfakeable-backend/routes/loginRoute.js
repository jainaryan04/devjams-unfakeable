import express from 'express';
import authenticateToken from '../middleware/authenticateToken.js'; 

const router = express.Router();

router.post('/verify-token', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Token is valid', user: req.user });
});

export default router;
