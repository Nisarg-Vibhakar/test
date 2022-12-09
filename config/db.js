const mongoose = require('mongoose')

const connectDb = async ()=>{
    try {
        const source = process.env.MONGO_URI
    const conn = await mongoose.connect(source, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
}

module.exports = connectDb