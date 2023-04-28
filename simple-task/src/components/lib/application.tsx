import { CreateTask, TaskList, UserList } from '../../components';

export const Application = () => {
  return (
    <main className="application">
      <div className="side-panel">
        <CreateTask />
        <UserList />
      </div>
      <TaskList />
    </main>
  );
};
