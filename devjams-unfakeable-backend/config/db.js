import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import pg from 'pg';  

dotenv.config();

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false,
    dialectModule: pg,  
    dialectOptions: {
        ssl: false,  
    },
});

export default sequelize;
