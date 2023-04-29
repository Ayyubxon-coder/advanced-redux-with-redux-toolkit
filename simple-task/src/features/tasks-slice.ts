import { createSlice, nanoid } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import data from '../api/data.json';
import { removeUser } from './users-slice';
export type TaskState = {
  entities: Task[];
};
type DraftTask = RequireOnly<Task, 'title'>;

export const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};

const initialState: TaskState = {
  entities: data.tasks,
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state, action: PayloadAction<Task['id']>) => {
      state.entities = state.entities.filter(
        (task) => task.id !== action.payload,
      );
    },
  },

  extraReducers(builder) {
    builder.addCase(removeUser, (state, action) => {
      const userId = action.payload;
      for (const task of state.entities) {
        if (task.user === userId) {
          task.user = undefined;
        }
      }
    });
  },
});
export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice;
