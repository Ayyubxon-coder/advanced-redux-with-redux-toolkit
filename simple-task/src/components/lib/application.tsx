import { CreateTask, TaskList } from '../../components';

export const Application = () => {
  return (
    <main className="application">
      <div className="side-panel">
        <CreateTask />
        {/* <UserList /> */}
      </div>
      <TaskList />
    </main>
  );
};
