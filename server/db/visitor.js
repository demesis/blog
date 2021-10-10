const mongoose = require('mongoose')
const Schema = mongoose.Schema

let visitorSchema = new Schema({
  //访客id
  visitor: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },

  //时间
  date: {
    type: Number,
    default: Date.now
  }
})


module.exports = mongoose.model('visitor', visitorSchema)








