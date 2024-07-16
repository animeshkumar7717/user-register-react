import React, { useState } from "react";
import ContactForm from "../contact-form/contactForm";
import ContactList from "../contact-list/contactList";
import './styles.css'

const Contact = () => {
  const [contact, setContact] = useState([
    { full_name: "Animesh", mobile: "1234" },
    { full_name: "Kumar", mobile: "3267" },
    { full_name: "Sharma", mobile: "8971" },
  ]);
  return (
    <div id="container">
      <div id="box">
        <ContactList contact={contact} />
        <ContactForm contact={contact} addContacts={setContact} />
      </div>
    </div>
  );
};

export default Contact;
