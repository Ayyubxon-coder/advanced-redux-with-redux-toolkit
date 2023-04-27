import { Task, CreateUser } from '../../components';
export const UserList = () => {
  const users: any = [];

  return (
    <section className="user-list">
      <CreateUser />
      {users.map((user: any) => (
        <Task key={user.id} user={user} />
      ))}
    </section>
  );
};
