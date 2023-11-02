import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/pro-light-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import { faMugMarshmallows } from "@fortawesome/pro-duotone-svg-icons";

const Footer = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  const [loading] = useState(false);
  const [state, handleSubmit] = useForm("xqkjlkjw");

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);
  // };

  return (
    <>
      <h2 className="head-text">
        Take a
        <FontAwesomeIcon
          icon={faMugMarshmallows}
          color="#594242"
          style={{
            fontSize: "40px",
            paddingBottom: "3px",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        />
        & chat with me
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          {/* <img src={images.email3d} alt="email" /> */}
          <div style={{ marginRight: "10px" }}>
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#213547"
              style={{ fontSize: "25px" }}
            />
          </div>
          <a href="amin.works101@gmail.com" className="p-text">
            raulsanz.engr@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <div style={{ marginRight: "10px" }}>
            <FontAwesomeIcon
              icon={faSkype}
              color="#213547"
              style={{ fontSize: "25px" }}
            />
          </div>
          <a href="tel:+18596614074" className="p-text">
            813 556 6359
          </a>
        </div>
      </div>
      {!state.succeeded ? (
        <form onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              id="username"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              id="message"
            />
          </div>
          <button className="p-text" type="submit" disabled={state.submitting}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
