import PropTypes from 'prop-types';

export default function Task({tasks,handleDelete,toggleTodo}){
    return(
    <>
        <label className="*:mx-3 text-xl flex items-center"> 
            <input type="checkbox" checked={tasks.status} name="list" onChange={e=>toggleTodo(tasks.id,e.target.checked)} className='peer w-5 h-4 focus:ring-blue-500' />
            <span className='font-semibold peer-checked:text-gradient-3 text-slate-500 md:w-[300px] w-[70%]'> {tasks.task}</span>
            <button className="bg-red-500 py-1 px-3 rounded-sm text-transparent bg-clip-text hover:bg-red-600 font-bold w-auto" onClick={()=>handleDelete(tasks.id)}>X</button>
        </label>
    </>
    )
}

Task.propTypes={
    tasks:PropTypes.object.isRequired,
    handleDelete:PropTypes.func.isRequired,
    toggleTodo:PropTypes.func.isRequired
}