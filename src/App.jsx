import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TodoForm from "./TodoForm";
export default function App(){
  const [tasks, setTasks] = useState("");
  const[tasklist, setTasklist] = useState(()=>{
    if(localStorage.getItem("TASKS")===null){
      return [];
    }
    else{
      return JSON.parse(localStorage.getItem("TASKS"));
    }
  });

  useEffect(()=>{
   localStorage.setItem("TASKS",JSON.stringify(tasklist));
  },[tasklist]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(tasks.trim()==='') return;
    setTasklist([...tasklist,{id:crypto.randomUUID(), task:tasks, status:false}]);
    // console.log("Task Added");
    setTasks("");
  }
  const toggleTodo=(id,status)=>{
    const newList=tasklist.map((tasks)=>{
      if(tasks.id===id) {
        // console.log("Task Updated");
        return {...tasks, status:status}}
      return tasks;
    })
    setTasklist(newList);
  }
  const handleDelete=(id)=>{
    const newList=tasklist.filter((tasks)=>tasks.id!==id);
    // console.log("Task Deleted")
    setTasklist(newList);
  }
  return(
    <>
      <div className="">
        <h1 className="text-center text-5xl font-extrabold text-gradient-1 m-5">Todo App</h1>
        <div className="flex flex-col md:flex-row font-sans">
          <TodoForm handleSubmit={handleSubmit} tasks={tasks} setTasks={setTasks} />
          <div>
          <div className="flex flex-col *:m-5 w-full float-left">
            <h1 className="text-2xl font-extrabold text-gradient-2">Tasks :</h1>
            {tasklist.length>0 ?
              <TaskList handleDelete={handleDelete} toggleTodo={toggleTodo} tasklist={tasklist}/>
              :<p className="px-10 font-bold green-gradient bg-clip-text text-transparent text-xl" title="Add new tasks">No Task Available !!!</p>}
          </div>
          </div>
        </div>
      </div>

    </>
  )
}