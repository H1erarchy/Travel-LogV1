const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true,
    enum: ['Africa', 'Asia', 'Caribbean', 'Central America', 'Europe', 'North America', 'Oceania', 'South America']
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  cost: {
    type: String,
    required: true,
    enum: ['$', '$$', '$$$', '$$$$']
  },
  review: {
    type: String,
    required: true
  }
})



module.exports = mongoose.model('Location', locationSchema)