import { Container } from 'react-bootstrap';
import DataResult from '../DataRender/DataResult';

const Result = ()=>{
  return (
    <Container className='result'>
        <Container className='title'>
            <h2>Result:</h2>
        </Container>
        <Container>
            <DataResult/>
            <DataResult/>
            <DataResult/>
        </Container>
    </Container>
  );
}

export default Result;