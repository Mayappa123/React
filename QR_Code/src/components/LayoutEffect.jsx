import { useLayoutEffect, React } from "react";

function MyComponent() {
  useLayoutEffect(() => {
    console.log("useLayouteffect Called");
  });
  return <div> I am useLayoutEffect.</div>;
}

export default MyComponent;
