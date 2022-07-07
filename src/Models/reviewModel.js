const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId


const reviewSchema= new mongoose.Schema({

    bookId: { type:ObjectId, require : true, ref:"books"},
    reviewedBy: { type:String, require: true, default : "Guest" , value: "string" },
    reviewedAt: {type:Date, require:true},
    rating: { type:number, minLength: 1, maxLength: 5, require:true},
    review: { type:String },
    isDeleted: { type: boolean, default: false},
  });

  module.exports = mongoose.model('review', reviewSchema)