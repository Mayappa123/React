import "bootstrap/dist/css/bootstrap.css";
import {
  Firstname,
  Lastname,
  Fullname,
  Addition,
  MyButton,
} from "./components/ExportMany";
import { AddTwoNumbers } from "./components/addForm";

function App() {
  const a = 10;
  const b = 10;
  return (
    <>
      <Firstname />
      <Lastname />
      <Fullname />
      <Addition a={a} b={b} />
      <AddTwoNumbers />
      <MyButton />
    </>
  );
}

export default App;
