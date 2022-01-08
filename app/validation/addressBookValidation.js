const Joi = require('joi');

module.exports = {
    createAddressBook: Joi.array().items(
        Joi.object({
            title: Joi.string().required().empty().messages({
                "string.base": `title should be a type of 'text'`,
                "string.empty": `title cannot be an empty field`,
                "any.required": `title is a required field`,
            }),
            addressLine1: Joi.string().required().empty().messages({
                "string.base": `addressLine1 should be a type of 'text'`,
                "string.empty": `addressLine1 cannot be an empty field`,
                "any.required": `addressLine1 is a required field`,
            }),
            addressLine2: Joi.string().required().empty().messages({
                "string.base": `addressLine2 should be a type of 'text'`,
                "string.empty": `addressLine2 cannot be an empty field`,
                "any.required": `addressLine2 is a required field`,
            }),
            country: Joi.string().required().empty().messages({
                "string.base": `country should be a type of 'text'`,
                "string.empty": `country cannot be an empty field`,
                "any.required": `country is a required field`,
            }),
            state: Joi.string().required().empty().messages({
                "string.base": `state should be a type of 'text'`,
                "string.empty": `state cannot be an empty field`,
                "any.required": `state is a required field`,
            }),
            city: Joi.string().required().empty().messages({
                "string.base": `city should be a type of 'text'`,
                "string.empty": `city cannot be an empty field`,
                "any.required": `city is a required field`,
            }),
            pinCode: Joi.number().required().empty().messages({
                "number.base": `pinCode should be number`,
                "number.empty": `pinCode cannot be an empty field`,
                "any.required": `pinCode is a required field`,
            }),
        })
    ),
    updateAddressBook: Joi.object({
        title: Joi.string().required().empty().messages({
            "string.base": `title should be a type of 'text'`,
            "string.empty": `title cannot be an empty field`,
            "any.required": `title is a required field`,
        }),
        addressLine1: Joi.string().required().empty().messages({
            "string.base": `addressLine1 should be a type of 'text'`,
            "string.empty": `addressLine1 cannot be an empty field`,
            "any.required": `addressLine1 is a required field`,
        }),
        addressLine2: Joi.string().required().empty().messages({
            "string.base": `addressLine2 should be a type of 'text'`,
            "string.empty": `addressLine2 cannot be an empty field`,
            "any.required": `addressLine2 is a required field`,
        }),
        country: Joi.string().required().empty().messages({
            "string.base": `country should be a type of 'text'`,
            "string.empty": `country cannot be an empty field`,
            "any.required": `country is a required field`,
        }),
        state: Joi.string().required().empty().messages({
            "string.base": `state should be a type of 'text'`,
            "string.empty": `state cannot be an empty field`,
            "any.required": `state is a required field`,
        }),
        city: Joi.string().required().empty().messages({
            "string.base": `city should be a type of 'text'`,
            "string.empty": `city cannot be an empty field`,
            "any.required": `city is a required field`,
        }),
        pinCode: Joi.number().required().empty().messages({
            "number.base": `pinCode should be number`,
            "number.empty": `pinCode cannot be an empty field`,
            "any.required": `pinCode is a required field`,
        }),
    })
}