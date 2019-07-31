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
const messagesSchema = new Schema({
  conversation_id:{type:String,required:true},
  sender_id:{type:String,required:true},
  messageType:String,
  message:String,
  deleted_at:{ type: Date, default: Date.now },
  created_date: { type: Date, default: Date.now },
  attachment_url:String
});



const Messages = mongoose.model('Messages', messagesSchema);

module.exports = {
    Messages: Messages

};


/**
 * Open Mongoose Connection to DB
 */
const db = mongoose.connection;
db.on('error', console.error);
