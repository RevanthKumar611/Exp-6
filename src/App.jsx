import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    dob: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email ID is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.country) newErrors.country = "Please select country";
    if (!form.dob) newErrors.dob = "Date of birth required";
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be 8+ chars";
    }
    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!form.agree) newErrors.agree = "Accept terms to proceed";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container">
      <header className="header">Input Validation</header>

      <form className="form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="row">
          <div className="field">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div className="field">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="field">
            <label>Phone *</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && <span>{errors.phone}</span>}
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label>Country *</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
            >
              <option value="">Select…</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            {errors.country && <span>{errors.country}</span>}
          </div>
          <div className="field">
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
            {errors.dob && <span>{errors.dob}</span>}
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div className="field">
            <label>Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          <label>I agree to Terms & Conditions</label>
          {errors.agree && <span>{errors.agree}</span>}
        </div>

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;