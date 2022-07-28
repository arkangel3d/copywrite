import { Container } from 'react-bootstrap';

const DataResult = ({textResult})=>{
 
  return (
    <>
    <Container className='resultContainer'>
        <p className='dataResult'> {textResult.text || "Result 1"}</p>
    </Container>
    <Container className='resultContainer'>
        <p className={textResult.palindrome? 'palindrome':'notPalindrome'}> {textResult.palindrome ? "Es una Palindromo" : "No es Palindromo"}</p>
    </Container>
    </>
    
    
  );
}

export default DataResult;