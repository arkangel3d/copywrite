import { Container } from 'react-bootstrap';
import DataResult from '../DataRender/DataResult';
import { useSelector } from 'react-redux';
const Result = ()=>{
  const result = useSelector(state=>state.text.slice(-3).reverse());
   
  return (
    <Container className='result'>
        <Container className='title'>
            <h2>Result:</h2>
        </Container>
        <Container>
            {/* <DataResult textResult={result} /> */}
            {result.map((text,index)=><DataResult key={index} textResult={text} />)}
        </Container>
    </Container>
  );
}

export default Result;