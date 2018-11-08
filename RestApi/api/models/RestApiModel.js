'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    required: 'Introduce nombre de usuario.'
  },
  first_name: {
      type: String,
      required: 'Primer apellido.'
  },
  last_name: {
      type: String,
  },
  email: {
      type: String,
      required: 'Introduce tu correo electronico.'
  }
});

module.exports = mongoose.model('User', UserSchema);