import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import TaskList from "./todo/TaskList";
import Context from "./context";
import {Alert} from "react-bootstrap";
import AddTask from "./todo/AddTask";
import Loader from "./Loader";


function App() {
   const [tasks, setTasks] = useState('');
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
         .then(response => response.json())
         .then(json => {
            setTasks(json);
            setLoading(false);
         })
   }, [])

   function toggleTask(id) {
      setTasks(tasks.map(task => {
         if (task.id === id) task.completed = !task.completed;
         return task;
      }))
   }

   function removeTask(id) {
      setTasks(tasks.filter(task => task.id !== id));
   }

   function addTask(title) {
      setTasks(
         tasks.concat([
            {
               title: title,
               id: Date.now(),
               completed: false,
            }
         ])
      );
   }

   return (
      <Context.Provider value={{removeTask, toggleTask}}>
         <div className="wrapper">
            <h1>What to do today?</h1>
            <AddTask onCreate={addTask}/>
            {loading ? <Loader/> : ''}
            {
               tasks.length ? (
                  <TaskList tasks={tasks}/>
               ) : (
                  loading ? null : <Alert variant='primary' className="mt-3">No tasks</Alert>
               )
            }
         </div>
      </Context.Provider>
   );
}

export default App;
