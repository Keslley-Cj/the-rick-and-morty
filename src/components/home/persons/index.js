import {Grid, Box} from "@mui/material";
import Person from "../person";
import Infos from "../person/infos";
import {useEffect, useState} from "react";

async function getUser(){
    const response = await fetch('https://rickandmortyapi.com/api/character');
    return await response.json();
}

const Persons = ()=>{
    const [users, setUser] = useState([]);
    useEffect(() => {
        getUser().then(data => {
           setUser(data["results"]);
        })
    }, [])

    return(
        <Box sx={{
            '&:hover': {
            },
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            maxWidth: '1920px'
        }} >
            <Grid container spacing={2} >
                {users.map((user, index) =>
                    <div
                        key={index}
                        style={{padding: "20px"}}>
                        <Grid item xs={0.5}/>
                        <Grid item xs={5.3}
                              >
                            <Person key={index}
                                    name={user.name}
                                    status={user.status}
                                    species={user.species}
                                    city={user.location}
                                    image={user.image}
                                    episode={user.episode}
                                    user={user.id}
                            />
                        </Grid>
                        <Grid item xs={0.4}/>
                    </div>)};
            </Grid>
        </Box>
    )
}

export default Persons;