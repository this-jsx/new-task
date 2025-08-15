import React, { useState } from 'react';
import Button from '../Button/Button';
import './NewTask.css';

const initialState = {
  title: '',
  text: '',
  mail: '',
  isDone: false,
  user: '',
  id: ''
};

export default function NewTask({onCreate, tasks}) {
  const [task, setTask] = useState(initialState);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setTask(task => ({
      ...task,
      [name]: value,
      id: new Date().toLocaleTimeString()
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(task);
    setTask(initialState);
  }

  return (
    <form className="new-task" onSubmit={handleSubmit}>
      <h2>Добавление задачи</h2>
      <label className="new-task__label">
        Задача
        <input
          name="title"
          type="text"
          maxLength={20}
          value={task.title}
          onChange={handleChange}
        />
      </label>

      <label className="new-task__label">
        Описание
        <textarea
          rows="2"
          name='text'
          value={task.text}
          onChange={handleChange}>
        </textarea>
      </label>
      
      <label className="new-task__label">
        Почта
        <input
          name="mail"
          type="email"
          value={task.mail}
          onChange={handleChange}
        />
      </label>

      <label className="new-task__label">
        Юзер
        <input
          name="user"
          type="text"
          value={task.user}
          onChange={handleChange}
        />
      </label>

      <Button
        className="app__create"
        id="create__task"
        disabled={task.title === '' || task.text === '' || task.mail === '' || task.user === ''}
      >
        Создать задачу
      </Button>
    </form>
  )
};