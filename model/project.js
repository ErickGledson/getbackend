const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    owner: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 150,
    },
});

module.exports = mongoose.model('project', projectSchema);