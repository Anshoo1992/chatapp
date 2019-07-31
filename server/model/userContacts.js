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
const userContactSchema = new Schema({
  user_id:{type:String,required:true},
  contact_id:{type:String,required:true},
  fname: {type:String,required:true},
  lname: {type:String,required:true},
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});



const UserContacts = mongoose.model('UserContacts', userContactSchema);

module.exports = {
    UserContacts: UserContacts

};


/**
 * Open Mongoose Connection to DB
 */
const db = mongoose.connection;
db.on('error', console.error);
