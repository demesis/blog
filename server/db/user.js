const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    user: {
        type: String,
        required: 'true'
    },
    password: {
        type: String,
        required: 'true'

    },
    photo: {
        type: String,
        default: '/files/img/photo/default.jpg'

    },
    admin: {
        type: Boolean,
        default: false
    }



})

module.exports = mongoose.model("user", userSchema);

