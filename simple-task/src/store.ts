import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer, usersReducer } from './features';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type ApplicationDispatch = typeof store.dispatch;
export default store;
