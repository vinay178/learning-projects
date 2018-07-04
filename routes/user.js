const mongoose = require('mongoose');
const schema = mongoose.Schema;

const User = new schema({
    username : {
        type :String
    },
    password : {
         type :String
    }
})

module.exports = mongoose.model('User',User);
