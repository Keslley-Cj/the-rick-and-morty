import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import './style.css';

const Person = () => {
    const { id } = useParams();

    async function getUser() {
        console.log(id)
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        return await response.json();
    }
    const [ user, setUser] = useState([]);
    useEffect(() => {
        getUser().then(data => {
            console.log(data)
            setUser(data);
        })
    }, []);

    return (
        <Fragment>
            <style>{ 'body { background-color:  hsla(218, 6%, 25%, 1);;}'}</style>
            <Box sx={{
                width: window.screen.width,
                height: 200,
                backgroundColor: 'white',
                '&:hover': {
                    backgroundColor: 'white',
                    opacity: [0.9, 0.8, 0.7],
                },
                alignItems: 'center'
            }}>
                <label className='label'>{ user.name} </label>
                <div className='image'>
                    <img style={{borderRadius: 10}} src={user.image}/>
                </div>
            </Box>
            <Box>
                <div style={{
                    height:window.screen.height,
                    width: window.screen.width,
                    columns: 2,
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <div style={{
                        backgroundColor: 'black',
                        height: 450, width: 600,
                        marginLeft: 300,
                        marginRight: 100,
                        borderRadius: 10,
                        padding: 100,
                        alignContent: 'center'
                    }}>
                        <label className='title'>Base informations</label><br/><br/><br/>
                        <label className='info'>Name: {user.name}</label><br/><br/><br/>
                        <label className='info'>Status: {user.status}</label><br/><br/><br/>
                        <label className='info'>Species: {user.species}</label><br/><br/><br/>
                        <label className='info'>Gender: {user.gender}</label><br/><br/><br/>
                        <label className='info'>Location: {user.location.name}</label><br/><br/><br/>
                    </div>
                    <div style={{
                        padding: 100,
                        backgroundColor: 'blue',
                        height: 450,
                        width: 600,
                        marginLeft: 50,
                        marginRight: 100 ,
                        borderRadius: 10}}>
                    </div>
                </div>
            </Box>

        </Fragment>
    )
}

export default Person;