const mongoose = require('mongoose');

const companySettingsSchema = new mongoose.Schema({
    minimumSalary: { type: Number, required: true },
    maximumSalary: { type: Number, required: true },
    minimumYearsOfExperience: { type: Number, required: true },
    maximumYearsOfExperience: { type: Number, required: true },
    keySkills: [{ type: String }],
    salaryCurrency: { type: String, required: true },
    showSalary: { type: String, required: true },
});



const companySettings = mongoose.model('companySettings', companySettingsSchema);

module.exports = companySettings;
