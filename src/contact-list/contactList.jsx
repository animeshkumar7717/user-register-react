import React, { useState } from "react";
import './styles.css';

const ContactList = ({ contact }) => {
  const [filterText, setFilterText] = useState("");

  const filteredData = contact.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  return (
    <div>
      <h2>Contact Lists</h2>
      <input
        placeholder="Search"
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul id="list">
        {filteredData.map((item, key) => (
          <li key={key}>
            <span>{item.full_name}</span>
            <span>{item.mobile}</span>
          </li>
        ))}
      </ul>
      <span id="totalCount">Total Count: {filteredData.length}</span>
    </div>
  );
};

export default ContactList;
