import { taskSlice } from './taskSlice';
import { humansSlice } from './humansSlice';
const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    humans: humansSlice.reducer
  }
});
