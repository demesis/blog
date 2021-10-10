const mongoose = require('mongoose')
const Schema = mongoose.Schema

let msgSchema = new Schema({
    msg: {
        type: String,
        require: true
    },
    date: {
        type: Number,
        default: Date.now
    },
    //用户
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    likes: [Schema.Types.ObjectId],

    //子留言
    children: [{
        //内容
        msg: { type: String, required: true },
        //日期
        date: { type: Number, default: Date.now },
        //用户
        user: { type: Schema.Types.ObjectId, ref: "user", required: true },
        //点赞数
        likes: [Schema.Types.ObjectId],
        //回复的是谁
        replyUser: { type: Schema.Types.ObjectId, ref: "user", required: true }
    }]
})





module.exports = mongoose.model("msg", msgSchema);