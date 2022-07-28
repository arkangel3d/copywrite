import './App.css';
import { Container } from 'react-bootstrap';
import Nav from './Components/NavBar/NavBar';
import Result from './Components/Result/Result';
function App() {
  return (
    <Container className='app'>
    <div >
      <Nav />
      <Container className='alignCenter'>
        <Result/>
      </Container>
     
    </div>
    </Container>
  );
}

export default App;
