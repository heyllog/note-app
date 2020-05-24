import React, {useState} from "react";
import {InputGroup, FormControl, Button} from "react-bootstrap";


function AddTask({onCreate}) {
   const [value, setValue] = React.useState('');

   function submitHandler(event) {
      event.preventDefault();

      if (value.trim()) {
         onCreate(value);
         setValue('');
      }
   }

   return (
      // <form onSubmit={submitHandler}>
      //    <input value={value} onChange={event => setValue(event.target.value)}/>
      //    <button type="submit" >Add task</button>
      // </form>
      <InputGroup className="my-4" as="form" onSubmit={submitHandler}>
         <FormControl
            placeholder="Your Task"
            aria-label="Your Task"
            aria-describedby="basic-addon2"
            value={value}
            onChange={event => setValue(event.target.value)}
         />
         <InputGroup.Append>
            <Button variant="primary" type="submit">Add Task</Button>
         </InputGroup.Append>
      </InputGroup>
   )
}

export default AddTask;