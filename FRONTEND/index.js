import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Button, Card, Form, ListGroup, Spinner } from "react-bootstrap";

const API_URL = "http://localhost:5000"; // Backend URL

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/doctors`).then((res) => setDoctors(res.data));
  }, []);

  return (
    <Container>
      <h2>Select a Doctor</h2>
      <ListGroup>
        {doctors.map((doctor) => (
          <ListGroup.Item key={doctor._id}>
            {doctor.name} <Button onClick={() => navigate(`/doctor/${doctor._id}`)}>View Slots</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

const DoctorSlots = () => {
  const { doctorId } = useParams();
  const [slots, setSlots] = useState([]);
  const [date, setDate] = useState("");

  const fetchSlots = () => {
    if (!date) return;
    axios.get(`${API_URL}/doctors/${doctorId}/slots?date=${date}`).then((res) => setSlots(res.data));
  };

  return (
    <Container>
      <h3>Available Slots</h3>
      <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <Button onClick={fetchSlots}>Check Slots</Button>
      <ListGroup>
        {slots.map((slot) => (
          <ListGroup.Item key={slot}>
            {slot} <Button onClick={() => console.log("Book", slot)}>Book</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

const element = (
  <Router>
    <Container>
      <h1>Appointment Booking System</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:doctorId" element={<DoctorSlots />} />
      </Routes>
    </Container>
  </Router>
);

ReactDOM.render(element, document.getElementById("root"));
