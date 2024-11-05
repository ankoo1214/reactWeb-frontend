import { useState } from "react";
import "./Form.css";
import axios from "axios";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
function Form() {
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [alertVisible, setalertVisible] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [progressWidth, setprogressWidth] = useState(0);
  const [alertType, setalertType] = useState("success");
  let alertDuration = 3000;

  const serviceId = "service_5w05x1o";
  const templateId = "template_7wje82q";
  const userId = "oaFNs8A4it-iUS4fn";

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = () => {
    if (!name || !email || !message) {
      setalertMessage("Marked fields are required");
      setalertVisible(true);
      setprogressWidth(0);
      setalertType("danger");
      return;
    }
    if (!validateEmail(email)) {
      setalertMessage("Please enter a valid email address");
      setalertType("danger");
      setalertVisible(true);
      return;
    }
    const templateParams = {
      from_name: name,
      to_name: "Ankush Patale",
      from_email: email,
      contact: contact,
      message: message,
    };
    try {
      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log("Email sent succssfully", response.status, response.text);
        });
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("contact", contact);
      formData.append("message", message);

      axios
        .post("http://localhost:5000/form/submit", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.Status === "Form submitted Successfully") {
            setname("");
            setemail("");
            setmessage("");
            setcontact("");
            setalertType("success");
            setalertMessage("Message sent successfully");
            setalertVisible(true);
            console.log("Form is submitted successfully");
          }
        });
    } catch (error) {
      if (error.response) {
        console.log("Error submitting the form ");
      }
    }
  };
  useEffect(() => {
    let interval;
    if (alertVisible) {
      setprogressWidth(0);
      let width = 0;

      interval = setInterval(() => {
        if (width >= 100) {
          clearInterval(interval);
          setalertVisible(false);
        } else {
          width = width + 2;
          setprogressWidth(width);
        }
      }, alertDuration / 50);
    }
    return () => clearInterval(interval);
  }, [alertVisible]);

  return (
    <div className="container my-5">
      <div className="header d-flex flex-column align-items-center justify-content-center">
        <h1 className="primary-text fw-semibold heading">Let's Discuss</h1>
        <p className="fs-5 subHeading text-center">
          Please fill out the form below to discuss your project and we'll get
          back to you in less than 24 hours.
        </p>
      </div>
      <div className="container px-5">
        {alertVisible && (
          <div class={`alert alert-${alertType} fs-6`} role="alert">
            {alertMessage}
            <div class="progress-container">
              <div
                class="progress-bar"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
          </div>
        )}
        <form class="row g-4 my-4" onSubmit={(e) => e.preventDefault()}>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label primary-text">
              Name
            </label>
            <input
              placeholder="Your name"
              type="text"
              value={name}
              class="form-control"
              id="inputPassword4"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              placeholder="Enter your email"
              type="text"
              className="form-control"
              id="inputEmail"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div class="col-12 ">
            <label for="inputAddress" class="form-label">
              Whatsapp Number
            </label>
            <input
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
              type="number"
              class="form-control"
              id="inputAddress"
              placeholder="+91 XXXXXXXXX"
            />
          </div>

          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Your Message*
            </label>
            <textarea
              onChange={(e) => setmessage(e.target.value)}
              value={message}
              class="form-control"
              placeholder="Leave your message here"
              id="floatingTextarea"
            ></textarea>
          </div>

          <div class="col-12 d-flex justify-content-center mt-5">
            <button
              onClick={() => handleSubmit()}
              type="submit"
              class="btn navBtn px-4 py-2 fs-5 rounded-5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
