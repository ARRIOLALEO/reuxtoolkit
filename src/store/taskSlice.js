import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';
const createTask = (name) => {
  return {
    id: nanoid(),
    title: name,
    complete: false,
    assignedTo: ''
  };
};

const initialState = [
  createTask('buy tomatoes'),
  createTask('but another things')
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      const task = createTask(action.payload);
      state.push(task);
    },
    toggle: (state, action) => {
      const idTask = state.findIndex(
        (task) => task.id === action.payload.taskId
      );
      state[idTask].complete = action.payload.complete;
    },
    assignedToHuman: (state, action) => {
      console.log(action);
      const idTask = state.findIndex(
        (task) => task.id === action.payload.taskId
      );
      state[idTask].assignedTo = action.payload.id;
    }
  }
});

export const toggleAction = createAction('tasks/toggle', (taskId, complete) => {
  return {
    payload: {
      taskId,
      complete
    }
  };
});

export const assignedToAction = createAction(
  'tasks/assignedToHuman',
  (taskId, id) => {
    console.log(taskId, id, 'this data');
    return {
      payload: {
        taskId,
        id
      }
    };
  }
);
