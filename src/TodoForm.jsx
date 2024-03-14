import PropTypes from 'prop-types';
export default function TodoForm({handleSubmit,tasks,setTasks}){
    return(
        <>
            <form onSubmit={handleSubmit} className="flex flex-col *:m-5 md:w-[50%] items-center">
                <div className="flex flex-col *:my-2">
                    <label htmlFor="tasktext" className='text-2xl font-extrabold text-gradient-2'> New Task </label>
                     <div className='p-1 blue-gradient'> 
                        <input 
                            type="text" 
                            placeholder=" Enter your task" 
                            id="tasktext"
                            className=" p-2 w-80 h-10 bg-white outline-none placeholder:italic placeholder:p-2 focus:placeholder-white "
                            value={tasks}
                            onChange={e=>setTasks(e.target.value)}
                            autoComplete='off'
                        />
                    </div>
                </div>
                <button type="submit" className=" blue-gradient rounded-md h-11 w-24 font-extrabold text-xl text-slate-100 hover:scale-105"> ADD </button>
            </form>
        </>
    )
}
TodoForm.propTypes={
    handleSubmit:PropTypes.func.isRequired,
    tasks:PropTypes.string.isRequired,
    setTasks:PropTypes.func.isRequired
}