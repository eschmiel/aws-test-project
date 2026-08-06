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

const Title = () => <Typography variant='h1' align='center'>Lambda Quest</Typography>

export default App
