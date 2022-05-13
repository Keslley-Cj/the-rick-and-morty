import {Fragment, useEffect, useState} from "react";
import './style.css'
import {Brightness1} from "@mui/icons-material";
import {Link} from "react-router-dom";

async function getEpisode(episode){
    const response = await fetch(episode);
    return await response.json();
}

const Infos = (props) => {
    const [episode, setEpisode] = useState([]);
    useEffect(() => {
        getEpisode(props.episode[0]).then(data => {
            setEpisode(data);
        })
    }, [])
    return(
        <Fragment>
            <Link to={`person/${props.user}`} params={{user: props}}><label className="name">{props.name}</label><br/></Link>
            <label className="species"> <Brightness1 style={{color: props.status === 'Alive' ? "green" : "red", height: "10px"}}> </Brightness1>{props.status} - {props.species}</label><br/><br/>
            <label className="infos-gray">Last known location:</label><br/>
            <label className="response-infos"> {props.city.name} </label><br/><br/>
            <label className="infos-gray">First seen in:</label><br/>
            <label className="response-infos">{episode.name}</label>
        </Fragment>

    )
}

export default Infos;