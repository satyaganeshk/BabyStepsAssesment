const {body, validationResult} = require('express-validator')

app.post(
  '/appointments',
  [
    body('doctorId').isMongoId(),
    body('date').isISO8601(),
    body('duration').isInt({min: 30, max: 120}),
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    // Proceed to create appointment
  },
)
