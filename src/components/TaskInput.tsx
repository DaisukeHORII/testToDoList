// ToDoアイテムの追加を行うコンポーネントです。

import React, { useRef } from 'react';
import { Task } from './Types';

type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskInput: React.FC<Props> = ({ setTasks }) => {
    const inputEl = useRef<HTMLInputElement>(null);
  
    const handleAddTask = () => {
      if (inputEl.current?.value === "") {
        return;
      }
      setTasks((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: inputEl.current!.value,
          done: false,
        },
      ]);
      inputEl.current!.value = "";
    };
  
    return (
      <div>
        <input type="text" ref={inputEl} />
        <button onClick={handleAddTask}>追加</button>
      </div>
    );
  };
  
  export default TaskInput;