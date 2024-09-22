import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; 

const UserDetails = sequelize.define('UserDetails', {
    srno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    emailid: {
        type: DataTypes.STRING, // Use STRING for email instead of INTEGER
    },
    results: {
        type: DataTypes.JSON, 
    },
}, {
    tableName: 'user_details',
    timestamps: false,
});

export default UserDetails;
