import "./App.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setError("Please fill in all fields before sending ❌");
      setSuccess("");
      setTimeout(() => setError(""), 3000);

      return;
    }

    emailjs
      .sendForm(
        "service_pm99tp7",
        "template_8kalte1",
        formRef.current,
        "slPgVFnWcYTx24UtM"
      )
      .then(
        () => {
          setSuccess("Message sent successfully ✅");
          setFormData({ user_name: "", user_email: "", message: "" });
          formRef.current.reset();
          setTimeout(() => setSuccess(""), 3000);
        },
        (error) => {
          setError("Error sending message ❌");
          console.error(error);
          setTimeout(() => setError(""), 3000);
        }
      );
  };

  return (
    <div className="pt-5 padding-x pb-5 d-flex justify-content-center align-items-center flex-column form-bg ">
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <h1 className="text-center mb-4 form-header">Contact Me</h1>
        <div data-mdb-input-init className="form-outline mb-4 ">
          <input
            type="text"
            name="user_name"
            id="form4Example1"
            className="form-control p-2"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="email"
            name="user_email"
            id="form4Example2"
            className="form-control p-2"
            placeholder="E-mail"
            value={formData.user_email}
            onChange={handleChange}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <textarea
            className="form-control"
            name="message"
            id="form4Example3"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Error & Success Messages */}
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}

        <div className="d-flex justify-content-center">
          <button
            data-mdb-ripple-init
            type="submit"
            className="btn btn-type2 btn-block mb-4"
          >
            Send Form
          </button>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <h3 className="text-center form-header mt-4">
            Or cotact me via:
            <span className="linkedn-icon mx-2">
              <a
                href="https://www.linkedin.com/in/kubra-dogan-982ba5243/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-demo-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="45"
                  height="45"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
              </a>
            </span>
          </h3>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
