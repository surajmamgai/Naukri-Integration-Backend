const Job = require('../models/jobModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// @desc    Get all jobs
// @route   GET /jobs
exports.getAllJobs = catchAsync(async (req, res, next) => {
    const jobs = await Job.find();

    return next(new AppError('Error fetching jobs', 404));

    res.status(200).json({
        status: 'Fetched all jobs',
        data: jobs
    });
});