import {Container, Navbar, Button} from 'react-bootstrap';

const Nav = ()=>{
  return (
    <Container className='nav alignCenter'>
      <Navbar>
        <Container>
          <input placeholder='Insert Text' className='input' type={'text'}/>
          <Button className='button' type="button">Send</Button>{' '}
        </Container>
      </Navbar>
    </Container>
  );
}

export default Nav;