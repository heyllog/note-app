import React, {Component} from 'react';
import {ListGroup, InputGroup, FormControl} from "react-bootstrap";

import TaskItem from "./TaskItem";

export default function TaskList({tasks}) {
   return (
      <ListGroup className="mt-3">
         {tasks.map((task) => {
            return <TaskItem
               task={task}
               key={task.id}
            />
         })}
      </ListGroup>
   );
}
