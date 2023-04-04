const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    functionalArea: { type: String, required: true },
    location: { type: String, required: true },
    referenceCode: { type: String, required: true },
    salaryCurrency: { type: String, required: true, enum: ['INR', 'USD'] },
    showSalary: { type: Boolean, required: true },
    industry: { type: String, required: true },
    jobType: { type: String, required: true },
    naukriUrl: { type: String },
    errorCode: { type: String },
    createdAt: { type: Date, required: true, default: Date.now() }
});



const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
