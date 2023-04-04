const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);


exports.createJobValidator = (data) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        functionalArea: Joi.string().required(),
        location: Joi.string().required(),
        referenceCode: Joi.string().required(),
        salaryCurrency: Joi.string().required(),
        showSalary: Joi.boolean().required(),
        industry: Joi.string().required(),
        jobType: Joi.string().required(),
    });
    return schema.validate(data);
};