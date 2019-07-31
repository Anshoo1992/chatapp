/********************************************************************
Connect to MongoDB
Create Mongoose Schema and Model
Export Model to make available outside this script

*********************************************************************/

/********************************************************************
Modules Required
*********************************************************************/
const mongoose = require('mongoose');
const validationRules = require('./validationRules.js');
const errMsg = require('./errorMessages');
const rules = new validationRules();

//===============================================================================
//Create Mongoose Schema
const Schema = mongoose.Schema;


/**
 * CREATE A MONGOOSE SCHEMA 
 * MongoDb automatically create a parameter _id that can be used to uniquely
 * identify each document in the DB
 */

// login/user schema model
const contactSchema = new Schema({
    email: {
        type: String,
        unique: true,
        validate: {
          validator: props => rules.validateEmailInput(props),
          message: props => `${props.value}` + errMsg.emailerr
        },
        required: {
          value: true,
          message: 'Email ' + errMsg.required
        },
      },
      phone: {
        type: String,
        unique: true,
        validate: {
          validator: props => rules.validatePhoneInput(props),
          message: props => `${props.value}` + errMsg.phoneerr
        },
        required: {
          value: true,
          message: 'Phone number ' + errMsg.required
        },
      },
      fname: {
        type: String,
        required: {
          value: true,
          message: 'First Name ' + errMsg.required
        },
      },
      lname: {
        type: String,
        required: {
          value: true,
          message: 'Last Name ' + errMsg.required
        },
      },
    mname: String,
    created_date: { type: Date, default: Date.now }

});



const Contacts = mongoose.model('Contacts', contactSchema);

module.exports = {
    Contacts: Contacts

};


/**
 * Open Mongoose Connection to DB
 */
const db = mongoose.connection;
db.on('error', console.error);
