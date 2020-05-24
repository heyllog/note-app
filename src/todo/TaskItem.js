import React, {useContext} from 'react';
import {ListGroup, Button} from "react-bootstrap";

import Context from "../context";

export default function TaskItem({task}) {
   const {removeTask, toggleTask} = useContext(Context);
   const classes = [];

   if (task.completed) classes.push('done');

   return (
      <ListGroup.Item className="todo-item d-flex">
         <span className={classes.join(' ')}>
            <input
               type="checkbox"
               className="mr-3"
               checked={task.completed}
               onChange={() => toggleTask(task.id)}/>
            {task.title}
         </span>
         <Button variant="primary" onClick={() => removeTask(task.id)}>&times;</Button>
      </ListGroup.Item>
   );
}

