import { useEffect, useState } from 'preact/hooks';

import Task from '../../components/task';
import style from './style.css';

const mockTasks = [
  {
    description: 'Do exercise 2',
    finished: false,
    id: 1,
    title: 'Gym modified',
  },
  { description: 'apples', finished: false, id: 2, title: 'shop' },
  { description: 'Math', finished: false, id: 3, title: 'Homework 2' },
  { description: 'Spanish', finished: true, id: 5, title: 'Homework 3' },
  { description: 'Math', finished: false, id: 6, title: 'Homework 4' },
  { description: 'Math', finished: false, id: 7, title: 'Homework 5' },
];

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/myapithatworks_war/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch(() => setTasks(mockTasks));
  }, []);

  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>List of tasks</p>

      <div class={style.tasks}>
        {tasks.map((task) => (
          <Task
            key={task.id}
						id={task.id}
						finished={task.finished}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
