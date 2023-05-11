const mongoose = require('mongoose')

// const schema = new
// mongoose.Schema({
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  phone: {
    type: String,
    minlength: 5,
  },
  street: {
    type: String,
    required: true,
    minlength: 5,
  },
  city: {
    type: String,
    required: true,
    minlength: 3,
  },
})

module.exports = mongoose.model('Person', personSchema)

// const mongoose = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')

// const url = process.env.MONGODB_URI

// mongoose
//   .connect(url)
//   .then(() => {
//     console.log('connected to MongoDB')
//   })
//   .catch((error) => {
//     console.log('error connecting to MongoDB:', error.message)
//   })

// const personSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     minlength: 3,
//     required: true,
//     unique: true,
//   },
//   number: {
//     type: String,
//     minlength: 8,
//     required: true,
//   },
//   date: Date,
// })

// personSchema.plugin(uniqueValidator)

// personSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   },
// })

// module.exports = mongoose.model('Person', personSchema)
