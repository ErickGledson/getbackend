const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    owner: {
        type: String,
        required: true,
    },
    social_name: {
        type: String,
        required: true,
        maxlength: 150,
    },
    fantasy_name: {
        type: String,
        required: true,
        maxlength: 150,
    },
    description: {
        type: String,
        required: true,
    },
    cnae: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        required: true,
    },
    open_date: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        maxlength: 11,
    },
    cep: {
        type: String,
        required: true,
        maxlength: 9
    },
    address: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    complement: {
        type: String,
        required: false,
    },
    neighborhood: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    segment: {
        type: String,
        required: true,
    },
    community_impact: {
        type: String,
        required: true,
    },
    credit_reason: {
        type: String,
        required: true,
    },
    total_amount: {
        type: String,
        required: true,
    },
    collected_amount: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('project', projectSchema);