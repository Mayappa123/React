import React from "react";

function College({ college }) {
  return (
    <>
      <ul>
        {college.map((college, idx) => (
          <li key={idx} className="college-name">
            {college}
          </li>
        ))}
      </ul>
    </>
  );
}

export default College;
