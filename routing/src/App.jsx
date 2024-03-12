import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <h1>Welcome to react routing...</h1>
        <Outlet />
      </main>
    </>
  );
}

export default App;
