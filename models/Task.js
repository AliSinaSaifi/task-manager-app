const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
    name: {type: String, required: [true, "This field is required"], trim: true, maxlength: [40, "it can not be more than 20 characters"] },
    completed: {type: Boolean, default: false}
})

module.exports = mongoose.model("Task", taskSchema);