import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder="Name" value={name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={email} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={message} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
