const mongoose = require('mongoose');

const userEmployerSchema = new mongoose.Schema({


    companyName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      phonenumber: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      website: {
        type: String,
        required: true,
      },
    
    
    
});

module.exports = mongoose.model('UserEmployer',userEmployerSchema);