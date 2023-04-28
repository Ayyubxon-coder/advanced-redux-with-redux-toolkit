import { Task, CreateUser } from '../../components';
import { useAppSelector } from '../../hooks';
export const UserList = () => {
  const users = useAppSelector((state) => state.users.entities);
  return (
    <section className="user-list">
      <CreateUser />
      {users.map((user) => (
        <Task key={user.id} user={user} />
      ))}
    </section>
  );
};
