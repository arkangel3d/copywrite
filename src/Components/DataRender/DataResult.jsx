import { Container } from 'react-bootstrap';

const DataResult = ({textResult})=>{
 
  return (
    <>
    <Container className='resultContainer'>
        <p className='dataResult'> {textResult.text}</p>
    </Container>
    <Container className='resultContainer'>
        <p className={textResult.palindrome? 'palindrome':'notPalindrome'}> {textResult.palindrome ? "It's a palindrome" : "It's not a palindrome"}</p>
    </Container>
    </>
    
    
  );
}

export default DataResult;