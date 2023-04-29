import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { createSlice } from '@reduxjs/toolkit';
import data from '../api/data.json';
import { nanoid } from 'nanoid';

type UsersState = {
  entities: User[];
};

const initialState: UsersState = {
  entities: data.users,
};

type DraftUser = RequireOnly<User, 'realName' | 'alterEgo'>;

const createUser = (draftUser: DraftUser): User => {
  return { id: nanoid(), tasks: [], ...draftUser };
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = createUser(action.payload);
      state.entities.unshift(user);
    },
    removeUser: (state, action: PayloadAction<User['id']>) => {
      state.entities = state.entities.filter(
        (user) => user.id !== action.payload,
      );
    },
  },
});

export const usersReducer = usersSlice.reducer;

export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice;
