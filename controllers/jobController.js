const Job = require('../models/jobModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { createJobValidator } = require("../validators/jobValidators");

// @desc    Get all jobs
// @route   GET /jobs
exports.getAllJobs = catchAsync(async (req, res, next) => {
    const jobs = await Job.find();

    res.status(200).json({
        status: 'Fetched all jobs',
        data: jobs
    });
});

// @desc    Post a new job
// @route   POST /jobs
exports.createJob = catchAsync(async (req, res, next) => {
    const { error } = createJobValidator(req.body);
    if (error) return next(new AppError(error.details[0].message, 400));

    const newJob = await Job.create(req.body);

    res.status(201).json({
        status: 'Created new job',
        data: newJob
    });
});