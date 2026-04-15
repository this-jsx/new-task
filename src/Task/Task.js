import React from 'react'
import './Task.css'

export default function Task({id, user, title, text, mail, isDone, onComplete, onDelete,}) {

  return (
    <div className='task-container'>
      <div className={`task ${isDone ? 'task-done' : ''}`}>
        <p className='btns bottom_line'>
          <button id='btnChangeCondition' className={`button button__condition ${isDone ? 'button__done' : 'button__not-done'}`} onClick={() => onComplete(id)}> {isDone === true ? 'Done' : 'Not done'} </button>
          <button className='button__delete' style={{color: isDone ? '#fff' : '#b61313'}} onClick={() => onDelete(id)}>&times;</button>
        </p>
        <h2 className="task__title">Task: {title}</h2>
        <p className="task__text"><b>Description</b>: {text} </p>
        <p className="task__mail"><b>E-mail</b>: {mail} </p>
        <p className="task__user bottom_line"><b>User</b>: {user} </p>
        <p style={{fontWeight: 400}}>Done: <b><span className={`${isDone ? 'green' : 'red'}`}>{isDone ? 'yes' : 'no'}</span></b></p>
      </div>
    </div>
  );
}
    
