const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const URL = process.env.MONGO_URL;

mongoose.set('strictQuery', true);

const connectToMongo = async () => {
    try {
        if (!URL) {
            throw new Error('MONGO_URL is undefined. Check your .env file.');
        }

        let db = await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(db.connection.host);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = connectToMongo;
