import { useState } from "react";
import "../Styles/Contact.css";
import { FaCommentDots, FaPhone, FaEnvelope, FaUser } from "react-icons/fa";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (!/^\d+$/.test(formData.number)) {
      newErrors.number = "Number must contain digits only";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }
  };
  return (
    <section className="contact-form" id="contact">
      
      <div className="container contact-container">
        
        <form data-aos="fade-up" onSubmit={handleSubmit}>
          
          <div className="form-row">
            
            <div className="form-group">
              
              <label>Name</label>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FaUser className="icon" />
              </div>
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FaEnvelope className="icon" />
              </div>
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Number</label>
              <div className="input-box">
                <input
                  type="text"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={handleChange}
                />
                <FaPhone className="icon" />
              </div>
              {errors.number && <p className="error">{errors.number}</p>}
            </div>
            <div className="form-group">
              <label>Subject</label>
              <div className="input-box">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <FaCommentDots className="icon" />
              </div>
              {errors.subject && <p className="error">{errors.subject}</p>}
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <div className="input-box textarea-box">
              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <FaCommentDots className="icon" />
            </div>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit" className="butn">
            Submit <i className="fa-solid fa-paper-plane" />
          </button>
        </form>
        <div className="get-in-touch">
          <h6 data-aos="fade-down">Get in touch</h6>
          <p data-aos="fade-down">
            Stop wasting time and money designing and managing a website that
            doesn’t get results. Happiness guaranteed!
          </p>
          <div className="data phone" data-aos="fade-down">
            <div className="icon">
              <i className="fa-solid fa-phone" />
            </div>
            <p>0045939863784</p>
          </div>
          <div className="data email" data-aos="fade-down">
            <div className="icon">
              <i className="fa-solid fa-envelope" />
            </div>
            <p>yourmail@gmail.com</p>
          </div>
          <div className="data address" data-aos="fade-up">
            <div className="icon">
              <i className="fa-solid fa-location-dot" />
            </div>
            <p>John's House, 13/5 Road, Sidny United State Of America</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
