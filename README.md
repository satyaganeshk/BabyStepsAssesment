BabySteps Assignment

Below is an enhanced assignment that builds on the basic CRUD appointment tracker but adds more
complexity around appointment scheduling and availability. This version is designed to test deeper skills
in both backend logic and frontend interactivity, while still being scoped to roughly one day of work.

Assignment: Advanced Babysteps Appointment Booking
System
Overview
Build a full-stack application using Node.js/Express for the backend, MongoDB for data storage, and
React for the frontend. In this version, you will implement an appointment booking system for a prenatal
care service where users can view a doctor's available time slots and book appointments accordingly.
The key challenge is to compute available appointment slots based on the doctor’s predefined working
hours and existing bookings, preventing double bookings.

Backend Requirements (Node.js + Express + MongoDB):
1. Data Models:
○ Doctor:
■ name (String): Doctor's name.
■ workingHours (Object): Define daily working hours (e.g., { start:
"09:00", end: "17:00" }). For simplicity, assume the same hours for each
day.
■ (Optional) Additional fields (e.g., specialization).
○ Appointment:
■ doctorId (ObjectId): Reference to a Doctor.
■ date (Date): Date and time of the appointment.
■ duration (Number): Duration in minutes (e.g., 30 or 60).
■ appointmentType (String): E.g., “Routine Check-Up”, “Ultrasound”, etc.
■ patientName (String): Name of the patient.
■ notes (String, optional).

2. API Endpoints:
○ Doctor Endpoints:
■ GET /doctors Retrieve a list of all doctors.
■ GET /doctors/:id/slots?date=YYYY-MM-DD Compute and return the available
time slots for the specified doctor on the given date.Hint: Use the doctor’s
working hours and subtract any slots that conflict with existing appointments.

○ Appointment Endpoints:
■ GET /appointments Retrieve all appointments.
■ GET /appointments/:id Retrieve details for a specific appointment.

■ POST /appointments Create a new appointment.Important: Before creating,
validate that the requested time slot for the given doctor is available (i.e., no
overlapping appointments).
■ PUT /appointments/:id Update an existing appointment (ensure the updated
time slot remains available).
■ DELETE /appointments/:id Cancel an appointment.

3. Additional Backend Considerations:
○ Time Slot Calculation: Use a date library (e.g., date-fns or moment.js) to calculate and
compare times. Assume appointments start at fixed intervals (e.g., every 30 minutes).
○ Validation & Error Handling: Validate all inputs (e.g., required fields, date formats) and
handle errors gracefully.
○ (Optional Extra) Real-Time Updates: Implement a basic WebSocket (or Socket.io)
integration so that if an appointment is booked, any open client viewing available slots is
notified and their slot list updates automatically.

Frontend Requirements (React):
1. User Interface:
○ Doctor Selection: Create a page where users can view a list of doctors and select one.
○ Calendar/Slot View: After selecting a doctor, display a calendar or date picker for the
upcoming 7 days. For a selected date, show available time slots computed from the
backend.
○ Appointment Booking:
■ When a user clicks on an available slot, open a booking form to capture
additional details (e.g., patient name, appointment type, notes).
■ On submission, the app should send a request to the backend to book the
appointment.
○ Appointment Management:
■ List the user’s upcoming appointments.
■ Allow users to edit or cancel an appointment.

2. State Management & API Integration:
○ Use state management (React state or a library like Redux) to manage the list of doctors,
available slots, and appointments.
○ Implement proper loading states and error handling when interacting with the API.
3. UI/UX Considerations:
○ The design can be minimal but should be intuitive.
○ Use UI libraries (e.g., Material-UI, Bootstrap) if desired to speed up development.

Deliverables
● A Git repository (e.g., on GitHub) containing:
○ A README.md file with:
■ Installation and run instructions for both the backend and frontend.
■ A summary of any assumptions or design decisions made.
○ Organized and well-documented code for both the backend and frontend.
● Ensure the project is runnable locally with clear instructions.

Evaluation Criteria

● Functionality: Does the application work as expected? In particular, does it correctly compute
available time slots and prevent booking conflicts?
● Code Quality: Is the code clean, well-organized, and maintainable?
● Problem Solving: How well does the candidate handle time calculations and slot management?
Are edge cases considered (e.g., overlapping appointments)?
● Error Handling: Are errors handled gracefully on both the client and server sides?
● API Integration & UX: Does the front end effectively interact with the backend API and provide a
good user experience?
● Documentation: Are setup instructions and code comments clear and helpful?

Additional Notes
● Scope & Time Management: This assignment is intended to be more challenging than a basic
CRUD app but should still be manageable within roughly one day. Focus on getting the core
functionality working.
● Assumptions: You can assume user authentication isn’t required for this assignment.
● Optional Enhancements:
○ Implement real-time updates for slot availability.
○ Enhance the calendar view (e.g., using a third-party calendar component).
○ Add more detailed validations or error messages.
