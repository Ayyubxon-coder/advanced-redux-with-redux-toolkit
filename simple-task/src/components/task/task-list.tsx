import { Task } from '../../components';
import { useAppSelector } from '../../hooks';

export const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);

  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};
