import { Container, Typography } from '@mui/material';
import { Content } from './components/Content';

function App() {
  return (
    <>
      <Container> 
        <Title />
        <Content />
      </Container>
    </>
  )
}

const Title = () => <Typography variant='h1' align='center'>Lambda Questssss</Typography>

export default App
//