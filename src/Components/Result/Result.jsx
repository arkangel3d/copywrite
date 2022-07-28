import { Container } from 'react-bootstrap';
import DataResult from '../DataRender/DataResult';
import { useSelector } from 'react-redux';
const Result = ()=>{
  const result = useSelector(state=>state.text);
  return (
    <Container className='result'>
        <Container className='title'>
            <h2>Result:</h2>
        </Container>
        <Container>
            <DataResult/>
        </Container>
    </Container>
  );
}

export default Result;