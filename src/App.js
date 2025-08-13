import React, { useState } from 'react'
import TasksList from "./TasksList/TasksList";
import Pagination from "./Pagination/Pagination";
import Sort from './Sort/Sort';
import NewTask from './NewTask/NewTask';
import initialState from './tasks.json';
import './App.css';

const limit = 3;

export default function App() {
  const [tasks, setTasks] = useState(initialState);
  const [page, setPage] = useState(1);

  const currentTasks = tasks.slice((page - 1) * limit, page * limit);
  const pagesTotal = Math.ceil(tasks.length / 3);

  const handlePrevClick = () => {
    setPage(page => Math.max(page - 1, 1));
  }

  const handleNextClick = () => {
    setPage(page => Math.min(page + 1, pagesTotal));
  }

  const handleSortChange = (event) => {
    switch (event.target.value) {
      case 'user_up':
        setTasks((tasks) => [...tasks.sort((a, b) => a.user > b.user ? 1 : -1)]);
        break;

      case 'user_down':
        setTasks((tasks) => [...tasks.sort((a, b) => a.user < b.user ? 1 : -1)]);
        break;

      case 'status_up':
        setTasks((tasks) => [...tasks.sort((a, b) => a.isDone > b.isDone ? 1 : -1)]);
        break;

      case 'status_down':
        setTasks((tasks) => [...tasks.sort((a, b) => a.isDone < b.isDone ? 1 : -1)]);
        break;

      case 'mail_up':
        setTasks((tasks) => [...tasks.sort((a, b) => a.mail > b.mail ? 1 : -1)]);
        break;

      case 'mail_down':
        setTasks((tasks) => [...tasks.sort((a, b) => a.mail < b.mail ? 1 : -1)]);
        break;
    
      default:
        break;
    }
  }

  const handleCreateClick = (task) => {
    setTasks(tasks => [task, ...tasks]);
    console.log(task)
  }

  function handleDelete (id) {
    setTasks(tasks => tasks.filter(task => task.id !== id))
    console.log(tasks)
  }

  function handleIsDone(id) {
    setTasks(tasks => tasks.map(task => task.id === id ? {...task, isDone: !task.isDone} : task))
  }
  
  return (
    <div className="app">
      <Sort onChange={handleSortChange} />

      <Pagination
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        page={page}
        pagesTotal={pagesTotal}
      />

      <TasksList tasks={tasks} currentTasks={currentTasks} handleDelete={handleDelete} handleIsDone={handleIsDone} />

      <NewTask onCreate={handleCreateClick} />
    </div>
  );
}
