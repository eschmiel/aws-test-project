import { Box } from "@mui/material";
import { useState } from "react";
import { MainPlayerInfo } from "./MainPlayerInfo";
import { NameForm } from "./NameForm";
import { GameGFX } from "./GameGFX";

export const Content = () => {
    const [heroName, setHeroName] = useState('');
    const [heroHP, setHeroHP] = useState<number>();

    const createHero = (name: string) => {
        setHeroName(name);
        setHeroHP(100);
    }

    return (     
        
        // <Container sx={{marginTop:'100px', alignItems: 'center'}}>
            <Box sx={{width:'640px', margin: '50px auto'}}>
                {
                    heroName 
                    ? <MainPlayerInfo name={heroName} hp={heroHP} />
                    : <NameForm setName={createHero} />
                }
                <Box sx={{marginTop:'70px'}}>
                    <GameGFX />
                </Box>
            </Box>
        // </Container>
    )
}