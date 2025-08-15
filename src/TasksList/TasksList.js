import Task from "../Task/Task"
import './TasksList.css'

function TasksList({ tasks, currentTasks, handleDelete, handleIsDone }) {
  return (
    <div className={`${tasks.length === 2 ? 'tasks-two' : 'tasks-list'}`} >
        {currentTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            user={task.user}
            title={task.title}
            text={task.text}
            mail={task.mail}
            isDone={task.isDone}
            onDelete={handleDelete}
            onComplete={handleIsDone}
        />
    ))}
    </div>
  )
}

export default TasksList