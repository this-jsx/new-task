import React from "react";
import "./Sort.css";

export default function Sort({onChange}) {
  return (
    <select className="sort" onChange={onChange} id="sort">
      <option value="user_up">By user's name (ascending order)</option>
      <option value="user_down">By user's name (descending order)</option>
      <option value="status_up">By status (undone first)</option>
      <option value="status_down">By status (done first)</option>
      <option value="mail_up">By e-mail (ascending order)</option>
      <option value="mail_down">By e-mail (descending order)</option>
    </select>
  );
}
