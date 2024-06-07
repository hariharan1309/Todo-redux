import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('TASKS')) || [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
    },
    setTasks: (state, action) => {
      return action.payload;
    }
  },
});

export const { addTask, toggleTask, deleteTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
