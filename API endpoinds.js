app.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find()
    res.json(doctors)
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
})
