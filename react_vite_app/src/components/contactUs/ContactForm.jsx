import React, { useRef, useState } from "react";
import * as emailjs from "emailjs-com";
import DOMPurify from "dompurify"; // Import DOMPurify for sanitization
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownList from "react-widgets/DropdownList";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import "./Contact.css";

// Import MyComponent or define it in the same file
function MyComponent({ userInput }) {
  const sanitizedHTML = DOMPurify.sanitize(userInput);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
}

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sjgvyef",
        "template_lhh57u6",
        form.current,
        "6vLY1F2AYL9BslJi8"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Email sending failed");
        }
      );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title ps-4">
              <h2
                style={{
                  fontSize: "2em",
                  margin: "0",
                  fontFamily: "Raleway, sans-serif",
                  padding: "20px",
                }}
              >
                Contact SHEVINHOMES
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  color: "#fc5356",
                  fontWeight: "bold",
                  fontSize: "1.1em",
                  lineHeight: "1.5",
                  fontFamily: "Raleway, sans-serif",
                  padding: "20px",
                }}
              >
                Have questions or inquiries? We're eager to hear from you!
                Connect with us using the contact details provided, and our
                dedicated team will promptly assist you. Whether you're seeking
                information about properties, investment opportunities, or have
                general inquiries, SHEVIN HOMES is ready to help. Your property
                journey starts with us reach out today for personalized and
                expert assistance.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <img
              className="w-100"
              src="/src/assets/home/conn.png"
              alt="Search"
              style={{ maxHeight: "380px" }}
            />
          </div>
        </div>
      </div>

      <h2 className="text-center mt-4" style={{ textDecoration: "underline" }}>
        Contact form
      </h2>
      <form ref={form} onSubmit={sendEmail} className="container mt-4">
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">
            Name
          </label>
          <MyComponent userInput={name} />
          <input
            type="text"
            name="user_name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="user_email" className="form-label">
            Email
          </label>
          <MyComponent userInput={email} />
          <input
            type="email"
            name="user_email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          {/*MyComponent to render sanitized HTML */}
          <MyComponent userInput={message} />
          <textarea
            name="message"
            className="form-control"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="color" className="form-label">
            Select Color
          </label>
          <DropdownList
            defaultValue="Yellow"
            data={["Red", "Yellow", "Blue", "Orange"]}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Select Date
          </label>
          <DatePicker placeholder="m/dd/yy" className="form-control" />
        </div>

        <input
          type="submit"
          value="Send"
          className="btn btn-primary"
          style={{ backgroundColor: "#fc5356", borderColor: "#fc5356" }}
        />
      </form>
    </>
  );
};

export default ContactForm;
