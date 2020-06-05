import React, {useState} from "react";
import {InputGroup, FormControl, Button} from "react-bootstrap";


function useInputValue(defaultValue) {
   const [value, setValue] = useState(defaultValue);

   return {
      bind: {
         value,
         onChange: event => setValue(event.target.value)
      },
      value: () => value,
      clear: () => setValue(''),
   }
}


function AddTask({onCreate}) {
   const input = useInputValue('');

   function submitHandler(event) {
      event.preventDefault();

      if (input.value().trim()) {
         onCreate(input.value());
         input.clear();
      }
   }

   return (
      <InputGroup className="my-4" as="form" onSubmit={submitHandler}>
         <FormControl
            placeholder="Your Task"
            aria-label="Your Task"
            aria-describedby="basic-addon2"
            {...input.bind}
         />
         <InputGroup.Append>
            <Button variant="primary" type="submit">Add Task</Button>
         </InputGroup.Append>
      </InputGroup>
   )
}

export default AddTask;