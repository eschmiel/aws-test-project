import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { useState, type Dispatch, type SetStateAction, type SubmitEventHandler } from "react"

export const NameForm = ({setName}: NameFormProps) => {
    const [nameInputVal, setNameInputVal] = useState('');

    const submitHandler: SubmitEventHandler = (e) => {
        e.preventDefault();
        setName(nameInputVal);
    }
    return (
        <Box component='form' onSubmit={submitHandler}>
            <Stack spacing={3} sx={{alignItems: 'center'}}>
                <Typography variant='h5' align='center'>What is your name, hero?</Typography>
                <TextField 
                    id="nameInput" 
                    size='small'
                    value={nameInputVal} 
                    onChange={(e) => {setNameInputVal(e.target.value)}} 
                />
                <Button variant='contained' type='submit'>Enter the Fray</Button>
            </Stack>
        </Box>
    )
}



///// Types /////

type NameFormProps = {
    setName: Dispatch<SetStateAction<any>>
}
