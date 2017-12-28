const Joi = require('Joi')
const passwordRegex = require('../config/regexConstants').passwordRegex

module.exports = (req, res, next) => {
    
    const schema = Joi.object().keys({
        oldPassword: req.decoded.role==='regular'? Joi.string().regex(passwordRegex).required().label('old password') : null,
        newPassword: Joi.string().regex(passwordRegex).required().label('new password'),
    })
    return Joi.validate(req.body, schema , (err) => next(err))
}
