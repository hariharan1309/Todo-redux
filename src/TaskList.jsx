import PropTypes from 'prop-types';
import Task from './Task';
export default function TaskList({tasklist,handleDelete,toggleTodo}){
    return(
        <>
            <ul>
                {tasklist.map((tasks)=>{
                return(
                    <li key={tasks.id}>
                        <Task handleDelete={handleDelete} toggleTodo={toggleTodo} tasks={tasks}/>
                    </li>
                )
                })}
            </ul>
        </>
    )
}

TaskList.propTypes={
    tasklist:PropTypes.array.isRequired,
    handleDelete:PropTypes.func.isRequired,
    toggleTodo:PropTypes.func.isRequired
}