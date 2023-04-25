// import CreateTask from '../create/create-task';
import { CreateTask, TaskList } from '../index';

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
