import PropTypes from 'prop-types';

export default function Task({ task, handleDelete, toggleTodo }) {
  return (
    <label className="mx-3 text-xl flex items-center justify-between">
      <input 
        type="checkbox" 
        checked={task.status} 
        onChange={e => toggleTodo(task.id, e.target.checked)} 
        className='peer w-5 h-4 focus:ring-blue-500' 
      />
      <span className='font-semibold peer-checked:text-gradient-3 text-slate-700 md:w-[300px] w-[70%]'>
        {task.task}
      </span>
      <svg 
        onClick={() => handleDelete(task.id)} 
        className='h-6 w-6 hover:scale-105 duration-300 cursor-pointer' 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z" fill="#F87171"/>
      </svg>
    </label>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}
