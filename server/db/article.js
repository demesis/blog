const mongoose = require("mongoose")
const Schema = mongoose.Schema

let articleSchema = new Schema({
    //标题
    title: {
        type: String,
        required: true
    },

    //描述
    des: {
        type: String,
        required: true
    },

    //作者
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    //日期
    date: {
        type: Number,
        default: Date.now
    },

    //md地址
    md: {
        type: String,
        required: true
    },

    //浏览量
    pv: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model("article", articleSchema)
