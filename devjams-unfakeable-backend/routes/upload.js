import express from 'express';
import UserDetails from '../models/userDetails.js'; 
import authenticateToken from '../middleware/authenticateToken.js'; 

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
    const { email } = req.user; 
    const results = req.body; 

    try {
        const user = await UserDetails.findOne({ where: { emailid: email } });

        if (user) {
            user.results = user.results ? [...user.results, results] : [results]; 
            await user.save();
            return res.status(200).json({ message: 'Results updated successfully.' });
        } else {
            await UserDetails.create({
                emailid: email,
                results: [results], 
            });
            return res.status(201).json({ message: 'User created and results saved.' });
        }
    } catch (error) {
        console.error('Error saving results:', error);
        return res.status(500).json({ message: 'Error saving results.', error: error.message });
    }
});

export default router;
