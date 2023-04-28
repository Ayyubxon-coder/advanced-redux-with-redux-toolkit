import { ChangeEvent, FormEvent, useState } from 'react';
import { addUser } from '../../features';
import { useAppDispatch } from '../../hooks';

export const CreateUser = () => {
  const [user, setUser] = useState({ realName: '', alterEgo: '' });
  const dispatch = useAppDispatch();

  const handleUser = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  
  
  return (
    <form
      className="create-user"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addUser(user));
      }}
    >
      <label htmlFor="new-user-real-name">
        Real Name
        <input
          id="new-user-real-name"
          type="text"
          value={user.realName}
          placeholder="Real Name"
          required
          name="realName"
          onChange={handleUser}
        />
      </label>
      <label htmlFor="new-user-alter-ego">
        Alter Ego
        <input
          id="new-user-alter-ego"
          type="text"
          value={user.alterEgo}
          placeholder="Alter Ego"
          required
          name="alterEgo"
          onChange={handleUser}
        />
      </label>

      <button type="submit">Create User</button>
    </form>
  );
};
