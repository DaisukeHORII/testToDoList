// ToDoアイテムのリストを表示するコンポーネント

import React from 'react';
import TaskItem from './TaskItem';
import { Task } from './Types';

type Props = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    const handleDone = (task: Task) => {
        setTasks(prev => prev.map((t) => {
            if(t.id === task.id){
                return { ...task, done: !task.done }
            } else {
                return t
            }

        }))
    };

    const handleDelete = (task: Task) => {
        setTasks(prev => prev.filter((t) => {
            return t.id !== task.id
        }))
    };

    return (
        <div>
            {
                tasks.length <= 0 ? 
                'タスクの登録がありません'
                :
                <ul>
                    {
                        tasks.map(task => (
                            <TaskItem 
                              key={task.id}
                              task={task}
                              handleDone={handleDone}
                              handleDelete={handleDelete}
                            />
                        )) 
                    }
                </ul>
            } 
        </div>
    )
};

export default TaskList;                               