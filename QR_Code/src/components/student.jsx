import React from "react";

function Student({ name = "maya", age = 20 }) {
  return (
    <>
      <p>
        my name is {name}. I am {age} years old.
      </p>
    </>
  );
}


export default Student;
