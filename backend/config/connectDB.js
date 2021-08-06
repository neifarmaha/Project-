// const mongoose = require('mongoose');



// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       process.env.MONGO_URL,
//       {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//       }
//     );
//     console.log("Database CONNECTED");
//   } catch (error) {
//     console.error(error);
//   }
// };
// module.exports = connectDB;
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGO_URL')

const connectDB = async()=> {
    try {
        await mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log('Database connected successfully')
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB ;