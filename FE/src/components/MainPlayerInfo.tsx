import { Stack, Typography } from "@mui/material"

export const MainPlayerInfo = ({name, hp}: MainPlayerInfoProps) => {

    return (
        <Stack direction='row' sx={{justifyContent:'space-between'}}>
            <Typography><strong>Name:</strong> {name}</Typography>
            <Typography><strong>HP:</strong> {hp}</Typography>
        </Stack>
    )
}

///// Types /////

type MainPlayerInfoProps = {
    name: string;
    hp?: number;
}