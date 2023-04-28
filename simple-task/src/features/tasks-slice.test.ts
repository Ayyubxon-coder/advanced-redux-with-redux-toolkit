import { addTask, removeTask, tasksReducer, createTask } from './tasks-slice';
describe('taskSlice', () => {
  const initialState = {
    entities: [
      createTask({ title: 'write tests' }),
      createTask({ title: 'make them pass' }),
    ],
  };
  it(`should add a task when the ${addTask}`, () => {
    const task = createTask({ title: 'Profit' });
    const action = addTask(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual([task, ...initialState.entities]);
  });
});
