/********************************************************************
Connect to MongoDB
Create Mongoose Schema and Model
Export Model to make available outside this script

*********************************************************************/

/********************************************************************
Modules Required
*********************************************************************/
const mongoose = require('mongoose');

//===============================================================================
//Create Mongoose Schema
const Schema = mongoose.Schema;


/**
 * CREATE A MONGOOSE SCHEMA 
 * MongoDb automatically create a parameter _id that can be used to uniquely
 * identify each document in the DB
 */

// login/user schema model
const conversationSchema = new Schema({
  title:{type:String},
  creator_id:{type:String,required:true},
  channel_id:String,
  delete_date:{ type: Date, default: Date.now },
  created_date:{ type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});



const Conversations = mongoose.model('Conversations', conversationSchema);

module.exports = {
    Conversations: Conversations

};


/**
 * Open Mongoose Connection to DB
 */
const db = mongoose.connection;
db.on('error', console.error);
