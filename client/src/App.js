import './App.css';
import { Container } from 'react-bootstrap';
import Nav from './NavBar/NavBar';
import Result from './Result/Result';
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
