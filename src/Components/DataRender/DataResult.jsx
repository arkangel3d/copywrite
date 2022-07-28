import { Container } from 'react-bootstrap';

const DataResult = ({textResult})=>{
  return (
    <Container className='resultContainer'>
        <p className='dataResult'> {textResult || "Result 1"}</p>
    </Container>
  );
}

export default DataResult;