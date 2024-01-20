
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css'
import Navbar from './components/navbar';


function App() {
  let fooditems = ['dal', 'vegetables', 'milk', 'egg'];
  return (
    <>
      <center><br /><br />
        <Navbar /> <br /><br />
        <h1>healty Foods</h1>
        <ul className="list-group">
          {fooditems.map((item) => (
            <li className='list-group-item'>{item}</li>
          ))}
        </ul>

      </center>
    </>
  )
}

export default App
