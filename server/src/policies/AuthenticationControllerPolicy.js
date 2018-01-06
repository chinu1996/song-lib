const Joi = require('joi')
module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')// regex 8-32 long 
      )
    }

    const {error, value} = Joi.validate(req.body, schema)// call to validate via Joi
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password fails to match the following rules:
            <br>
            1. Must contain lower and upper case
            2. Should be 8-32 characters long`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid Registration Information'
          })
      }
    } else {
      next()
    }
  }
}
