import React,{useState,useEffect} from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Task } from "./components/Types";

const initialState: Task[] = [];

function App() {
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    // mock date
    const getMockData = () => {
      return [
        {
          id: 1,
          title: "TypeScriptプロジェクトを作成する",
          done: false,
        },
        {
          id: 2,
          title: "ToDoリストアプリを実装する",
          done: false,
        },
        {
          id: 3,
          title: "Bingに感謝する",
          done: true,
        },
      ];
    };
    setTasks(getMockData());
}, []);

  return (
    <div>
      <h1>ToDoリスト</h1>
      <TaskInput setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;