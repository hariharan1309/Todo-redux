import PropTypes from 'prop-types';
import Task from './Task';

export default function TaskList({ tasklist, handleDelete, toggleTodo }) {
  return (
    <ul className='flex flex-col gap-3'>
      {tasklist.map((task) => (
        <li key={task.id}>
          <Task handleDelete={handleDelete} toggleTodo={toggleTodo} task={task} />
        </li>
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  tasklist: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}
