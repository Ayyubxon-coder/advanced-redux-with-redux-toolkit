import { Loading, Task } from '../../components';
import { useTasks } from '../../hooks';

export const TaskList = () => {
  const [tasks, loading] = useTasks();

  return (
    <section className="task-list">
      <Loading loading={loading} />
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};
