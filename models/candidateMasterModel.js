const mongoose = require('mongoose');

const candidateMasterSchema = new mongoose.Schema({
    _id: { type: String, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    resume: { type: String, required: true },
});


const candidateMaster = mongoose.model('candidateMaster', candidateMasterSchema);

module.exports = candidateMaster;
