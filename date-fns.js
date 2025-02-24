const {startOfDay, endOfDay, eachMinuteOfInterval, format} = require('date-fns')

app.get('/doctors/:id/slots', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
    const {date} = req.query
    const start = startOfDay(new Date(date))
    const end = endOfDay(new Date(date))

    // Generate possible time slots
    const possibleSlots = eachMinuteOfInterval({start, end}).filter(time => {
      return time.getMinutes() % 30 === 0 // Assuming slots are 30 minutes
    })

    const appointments = await Appointment.find({
      doctorId: req.params.id,
      date: {$gte: start, $lt: end},
    })

    const bookedSlots = appointments.map(app =>
      format(app.date, 'yyyy-MM-dd HH:mm'),
    )
    const availableSlots = possibleSlots.filter(
      slot => !bookedSlots.includes(format(slot, 'yyyy-MM-dd HH:mm')),
    )

    res.json(availableSlots.map(slot => format(slot, 'yyyy-MM-dd HH:mm')))
  } catch (error) {
    res.status(500).json({message: 'Error fetching slots'})
  }
})
