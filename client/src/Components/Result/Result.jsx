import { Container } from 'react-bootstrap';
import DataResult from '../DataRender/DataResult';
import { useSelector } from 'react-redux';
const Result = ()=>{
  const result = useSelector(state=>state.text.slice(-3).reverse())
  const error = useSelector(state=>state.error)
   
  return (
    <Container className='result'>
        <Container className='title'>
            <h2>Result:</h2>
            <p className='notPalindrome'>{error && 'Please enter only letters, no numbers, no symbols, minimum 2 letters'}</p>
        </Container>
        <Container>
            {/* <DataResult textResult={result} /> */}
            {result.map((text,index)=><DataResult key={index} textResult={text} errorResult={error} />)}
        </Container>
    </Container>
  );
}

export default Result;
