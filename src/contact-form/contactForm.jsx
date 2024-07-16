import React, { useState } from "react";
import './styles.css';

const ContactForm = ({ contact, addContacts }) => {
  const initialState = {
    full_name: "",
    mobile: "",
  };

  const [data, setData] = useState(initialState);

  const onChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.full_name === '' || data.mobile === '') {
      alert('Please enter the data');
      return;
    }
    if (data.mobile.length !== 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }
    addContacts([...contact, data]);
    setData(initialState);
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="full_name"
            placeholder="Name"
            type="text"
            value={data.full_name}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            name="mobile"
            placeholder="Phone Number"
            type="text"
            value={data.mobile}
            onChange={onChangeInput}
          />
        </div>
        <div id="button">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
