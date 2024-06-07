import PropTypes from 'prop-types';

export default function TodoForm({ handleSubmit, task, setTask }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:mt-5 md:w-[50%] items-center">
      <div className="flex flex-col gap-2">
        <label htmlFor="tasktext" className='text-xl font-bold text-blue-500'> New Task </label>
        <div className='p-0.5 rounded-full blue-gradient'> 
          <input 
            type="text" 
            placeholder="Enter your task" 
            id="tasktext"
            className="px-4 rounded-full font-medium bg-white text-gray-700 w-80 h-10 outline-none"
            value={task}
            required
            onChange={e => setTask(e.target.value)}
            autoComplete='off'
          />
        </div>
      </div>
      <button type="submit" className="flex flex-row flex-nowrap gap-1 items-center group blue-gradient rounded-full px-4 py-1.5 font-bold duration-300 text-slate-100 hover:scale-105"> 
        ADD 
        <svg className='h-5 w-5 group-hover:rotate-90 duration-300'  enableBackground="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect fill="none" height="50" width="50"/><line fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="5" x1="9" x2="41" y1="25" y2="25"/><line fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="5" x1="25" x2="25" y1="9" y2="41"/>
        </svg>
      </button>
    </form>
  )
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
  setTask: PropTypes.func.isRequired
}
