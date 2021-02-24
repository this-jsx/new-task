import React from 'react'
import './Task.css'

export default function Task(props) {
  return (
    <div className="task">
      <p className="task__title">Задача: <strong>{props.title}</strong></p>
      <p className="task__text">Описание: {props.text} </p>
      <p className="task__mail">E-mail: {props.mail} </p>
      <p className="task__user">Пользователь: {props.user} </p>
      <p className="task__done">Выполнено: {props.isDone ? 'да' : 'нет'} </p>
    </div>
  );
}
    
