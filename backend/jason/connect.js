const mongoose = require('mongoose')

const personal = 'mongodb+srv://jasonsampy:jason@freecluster.n2c8cus.mongodb.net/?retryWrites=true&w=majority'


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(personal, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected to  ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;