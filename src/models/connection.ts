import dotenv from 'dotenv';
import database from 'mysql2/promise';

dotenv.config();

export default database.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});
