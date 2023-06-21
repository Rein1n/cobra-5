import { DataType, Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize();

const User = sequelize.define('Users', {
	RblxID: {
		type: DataType.STRING,
	},
	points: {
		type: DataType.INTEGER,
	},
}, {
	timestamps: false,
});

export default User;