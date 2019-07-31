/********************************************************************
Connect to MongoDB
Create Mongoose Schema and Model
Export Model to make available outside this script

*********************************************************************/

/********************************************************************
Modules Required
*********************************************************************/
const mongoose = require('mongoose');

console.log('Running mongoose version %s', mongoose.version);



//===============================================================================
//Create Mongoose Schema
const Schema = mongoose.Schema;


/**
 * CREATE A MONGOOSE SCHEMA 
 * MongoDb automatically create a parameter _id that can be used to uniquely
 * identify each document in the DB
 */

// login/user schema model
const deletedConversationSchema = new Schema({
    conversation_id:{type:String,required:true},
    user_id:{type:String,required:true},
    created_date: { type: Date, default: Date.now },

});



const DeletedConversation = mongoose.model('DeletedConversation', deletedConversationSchema);

module.exports = {
    DeletedConversation: DeletedConversation

};


/**
 * Open Mongoose Connection to DB
 */
const db = mongoose.connection;
db.on('error', console.error);
