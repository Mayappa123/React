
import 'bootstrap/dist/css/bootstrap.css';
import './styles/counter.css'
import Counter from './components/counter';
import Name from "./components/students";
import Age from "./components/filterArray";




function App() {
  return (
    <>
      <Counter /><br /><br />
      <Name />
      <Age />
    </>
  )
}

export default App;
