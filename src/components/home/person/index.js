import {Box, Data, Grid, ListItem} from "@mui/material";
import './style.css'
import Infos from "./infos";
const Person = (props) => {
    return (
    <Box className="person-style">
        <Grid container spacing={1}>
            <Grid item xs={5}>
                <Box>
                    <img className="min-image" src={props.image}/>
                </Box>
            </Grid>
            <Grid item xs={7}>
                <Infos
                    user={props.user}
                       name={props.name}
                       status={props.status}
                       species={props.species}
                       city={props.city}
                       episode={props.episode}/>
            </Grid>
        </Grid>
    </Box>
    )
}

export default Person;