import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  /* =========================
     Load saved data (storage)
  ========================= */
  useEffect(() => {
    const saved = sessionStorage.getItem("formData");
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  /* =========================
     Validation Functions
  ========================= */
  const validateField = (name, value) => {
    let message = "";

    if (name === "name" && value.trim() === "") {
      message = "Name is required";
    }

    if (name === "email") {
      if (value.trim() === "") {
        message = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = "Enter a valid email";
      }
    }

    if (name === "password") {
      if (value.length < 6) {
        message = "Password must be at least 6 characters";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  /* =========================
     Event Handlers
  ========================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation
    Object.keys(form).forEach((key) => {
      validateField(key, form[key]);
    });

    const hasErrors = Object.values(errors).some((msg) => msg);

    if (hasErrors) return;

    sessionStorage.setItem("formData", JSON.stringify(form));
    alert("Form submitted successfully!");

    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="app">
      <form className="form-card" onSubmit={handleSubmit} noValidate>
        <h1>Create Account</h1>

        {/* Name */}
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? "error-input" : ""}
          />
          {errors.name && <small>{errors.name}</small>}
        </div>

        {/* Email */}
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>

        {/* Password */}
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && <small>{errors.password}</small>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
