import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, deleteTask, setTasks } from "./store/tasksSlice";
import TaskList from "./components/TaskList";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [task, setTask] = useState("");
  const tasklist = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("TASKS"));
    if (storedTasks) {
      dispatch(setTasks(storedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasklist));
  }, [tasklist]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    dispatch(addTask({ id: crypto.randomUUID(), task, status: false }));
    setTask("");
  };

  const toggleTodo = (id, status) => {
    dispatch(toggleTask({ id, status }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask({ id }));
  };

  return (
    <div className="p-5 md:p-10">
      <h1 className="text-center text-5xl font-[750] text-gradient-1 m-5">Todo App</h1>
      <div className="flex flex-col md:flex-row font-sans">
        <TodoForm handleSubmit={handleSubmit} task={task} setTask={setTask} />
        <div>
          <div className="flex flex-col m-5 w-full float-left">
            <h1 className="text-xl font-bold text-blue-500 pb-2">Tasks :</h1>
            {tasklist.length > 0 ? (
              <TaskList handleDelete={handleDelete} toggleTodo={toggleTodo} tasklist={tasklist} />
            ) : (
              <p className="px-10 font-bold green-gradient bg-clip-text text-transparent text-xl" title="Add new tasks">
                No Task Available !!!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
