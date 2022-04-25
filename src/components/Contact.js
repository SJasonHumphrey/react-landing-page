import React from "react";
import "./Contact.css";

const Contact = ({ imageSrc }) => {
  return (
    <div className="contact">
        <img src={imageSrc} alt="travel" className="contact_image" />
      </div>
  );
};

export default Contact;
