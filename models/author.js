const mongoose = require("mongoose")
const authorSchema = new mongoose.Schema({
 authorId: String,
 first_name: { type: String, required: true },
 last_name: String
})
const Author = mongoose.model("Author", authorSchema)
module.exports = Author