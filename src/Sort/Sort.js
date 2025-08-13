import React from "react";
import "./Sort.css";

export default function Sort(props) {
  return (
    <select className="sort" onChange={props.onChange} id="sort">
      <option value="user_up">По имени пользователя (по возрастанию)</option>
      <option value="user_down">По имени пользователя (по убыванию)</option>
      <option value="status_up">По статусу (сначала невыполненные)</option>
      <option value="status_down">По статусу (сначала выполненные)</option>
      <option value="mail_up">По email (по возрастанию)</option>
      <option value="mail_down">По email (по убыванию)</option>
    </select>
  );
}
