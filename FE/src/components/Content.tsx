import { Box, Container } from "@mui/material";
import { useState } from "react";
import { MainPlayerInfo } from "./MainPlayerInfo";
import { NameForm } from "./NameForm";

export const Content = () => {
    const [heroName, setHeroName] = useState('');
    const [heroHP, setHeroHP] = useState<number>();

    const createHero = (name: string) => {
        setHeroName(name);
        setHeroHP(100);
    }

    return (     
        
        <Container sx={{marginTop:'100px', alignItems: 'center'}}>
            <Box sx={{border: 'black 1px solid', width:'500px', margin: 'auto'}}>
            {
                heroName 
                ? <MainPlayerInfo name={heroName} hp={heroHP} />
                : <NameForm setName={createHero} />
            }
            </Box>
        </Container>
    )
}