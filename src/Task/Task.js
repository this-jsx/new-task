import React from 'react'
import './Task.css'

export default function Task({id, user, title, text, mail, isDone, onComplete, onDelete,}) {

  return (
    <div className='task-container'>
      <div className={`task ${isDone ? 'task-done' : ''}`}>
        <p className='btns bottom_line'>
          <button id='btnChangeCondition' className={`button button__condition ${isDone ? 'button__done' : 'button__not-done'}`} onClick={() => onComplete(id)}> {isDone === true ? 'Выполнено' : 'Не выполнено'} </button>
          <button className='button__delete' onClick={() => onDelete(id)}>&times;</button>
        </p>
        <h2 className="task__title">Задача: {title}</h2>
        <p className="task__text"><b>Описание</b>: {text} </p>
        <p className="task__mail"><b>E-mail</b>: {mail} </p>
        <p className="task__user bottom_line"><b>Пользователь</b>: {user} </p>
        <p style={{fontWeight: 400}}>Выполнено: <b><span className={`${isDone ? 'green' : 'red'}`}>{isDone ? 'да' : 'нет'}</span></b></p>
      </div>
    </div>
  );
}
    
