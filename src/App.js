import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import TaskList from "./todo/TaskList";
import Context from "./context";
import {Alert} from "react-bootstrap";
import AddTask from "./todo/AddTask";


function App() {
   let [tasks, setTasks] = React.useState([
      {id: 0, completed: false, title: "Buy bread"},
      {id: 1, completed: false, title: "Buy butter"},
      {id: 2, completed: false, title: "Buy milk"},
   ]);

   function toggleTask(id) {
      setTasks(tasks = tasks.map(task => {
         if (task.id === id) task.completed = !task.completed;
         return task;
      }))
   }

   function removeTask(id) {
      setTasks(tasks = tasks.filter(task => task.id !== id));
   }

   function addTask(title) {
      setTasks(
         tasks.concat([{
            title: title,
            id: Date.now(),
            completed: false,
         }])
      );
   }

   return (
      <Context.Provider value={{removeTask, toggleTask}}>
         <div className="wrapper">
            <h1>What to do today?</h1>
            <AddTask onCreate={addTask}/>
            {
               tasks.length ? <TaskList tasks={tasks}/> : <Alert variant='primary' className="mt-3">No tasks</Alert>
            }
         </div>
      </Context.Provider>
   );
}

export default App;
