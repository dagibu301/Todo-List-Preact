import style from './style.css';

const Task = ({ id, finished, title, description }) => {

  const deleteTask = () => {
    console.log('delete task', id);
  };

  return (
    <div class={style.task}>
      <div class={style.info}>
        <input type='checkbox' checked={finished} />
        <div class={style.text}>
          {title}: {description}
        </div>
      </div>

      <div class={style.actions}>
        <button class={style.edit}>Edit</button>
        <button class={style.delete} onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
