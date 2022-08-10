import { createSlice, nanoid } from '@reduxjs/toolkit';

const createHuman = (name) => {
  return {
    id: nanoid(),
    name,
    taskIds: []
  };
};

const initialState = [createHuman('mario'), createHuman('Alansito')];
export const humansSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    }
  },
  extraReducers: (builder) => {
    builder.addCase('tasks/assignedToHuman', (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.id) {
          human.taskIds.push(action.payload.taskId);
        } else {
          const indexTask = human.taskIds.indexOf(
            (element) => element === action.payload.taskId
          );
          if (indexTask < 0) {
            human.taskIds.splice(indexTask, 1);
          }
        }
      }
    });
  }
});
