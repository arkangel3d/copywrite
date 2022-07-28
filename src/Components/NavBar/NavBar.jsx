import {Container, Navbar, Button} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch} from "react-redux";
import { resultText } from '../../Actions'
const Nav = ()=>{
  const [text,setText] = useState('');
  const dispatch = useDispatch();
  const handleText = (e)=>{
    setText(e.target.value);
  };
  const handleClick = (a)=>{
    dispatch(resultText(a));
  }
  return (
    <Container className='nav alignCenter'>
      <Navbar>
        <Container>
          <input onChange={(e)=>handleText(e)} value={text} placeholder='Insert Text' className='input' type={'text'}/>
          <Button onClick = {()=> handleClick(text) }className='button' type="button">Send</Button>{' '}
        </Container>
      </Navbar>
    </Container>
  );
}

export default Nav;