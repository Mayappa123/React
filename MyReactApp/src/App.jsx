
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css'
import Button from './components/button';


function App() {
  return (
    <>
      <form action="" className='bio'>
        <center>
         <input type="text" placeholder='Enter username' /> <br /><br /> <br />
         <input type="password" placeholder='Enter password'/> <br /><br /><br />
         <Button />
        </center>
        
      </form>
    </>
  )
}

export default App
