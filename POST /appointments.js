app.post("/appointments", async (req, res) => {
  try {
    const { doctorId, date, duration } = req.body;

    // Check if the time slot is available
    const existingAppointments = await Appointment.find({
      doctorId,
      date: { $gte: new Date(date), $lt: new Date(date).setMinutes(new Date(date).getMinutes() + duration) }
    });

    if (existingAppointments.length > 0) {
      return res.status(400).json({ message: "Time slot is already booked." });
    }

    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment" });
  }
});
