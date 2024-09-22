import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import cors from 'cors';
import loginRoute from "./routes/loginRoute.js"
import uploadRouter from "./routes/upload.js"

app.use(bodyParser.json());
app.use('/upload', uploadRouter); 
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use('/login', loginRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
