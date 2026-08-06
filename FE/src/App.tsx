import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import { NameForm } from './components/NameForm';

function App() {
  const [heroName, setHeroName] = useState('');

  return (
    <>
      <Container> 
        <Typography variant='h1' align='center'>Lambda Quest</Typography>

        {heroName ? <Typography>{heroName}</Typography>
        : <NameForm setName={setHeroName} />
        }
      </Container>
    </>
  )
}

export default App
