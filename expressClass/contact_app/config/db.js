const mongoose = require('mongoose')

exports.dbConnection = async ()=>{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB Connected')
}
