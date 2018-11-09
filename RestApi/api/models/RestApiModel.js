'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String
  },
  full_name: {
      type: String
  },
  profession: {
      type: String
  },
  image: {
      type: String
  },
  email: {
      type: String
  }
});

module.exports = mongoose.model('User', UserSchema);