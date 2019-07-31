const express = require('express');
const router = express.Router({ mergeParams: true });
/**
 * adding module imports
 */
const users = require('./users');
const contacts = require('./contacts');
const userContacts = require('./userContacts');
const messages = require('./messages');
const conversations = require('./conversations');
const paticipants = require('./participants');




router.use('/contacts', contacts);
router.use('/userContacts', userContacts);
router.use('/messages', messages);
router.use('/conversations', conversations);
router.use('/paticipants', paticipants);
router.use('/user', users);

module.exports = router;
