import { h } from 'preact';
import style from './style.css';

const Create = () => {

  const onSubmitform = (e) => {
    e.prevendDefault();
    console.log('submit');
  }

  return (
    <div class={style.create}>
      <h1>Create</h1>
      <p>Create a new task</p>

      <form class={style.form} onSubmit={onSubmitform}>
        <div>
          <label>Title: </label>
          <input type="text" name="title" />
        </div>

        <div>
          <label>Description: </label>
          <input type="text" name="description" />
        </div>

        <button class={style.button} type="submit">Create new task</button>
      </form>
    </div>
  );
}

export default Create;