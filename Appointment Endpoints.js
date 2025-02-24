app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find()
    res.json(appointments)
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
})
