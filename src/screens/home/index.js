import { Fragment, useState, useEffect} from "react";
import { Box} from "@mui/material";
import './style.css'
import Persons from "../../components/home/persons";

const Home = () => {
    return(
        <Fragment>
            <Box sx={{
                width: `#{window.screen.width}px`,
                height: 300,
                backgroundColor: 'white',
                opacity: 1.6,
                '&:hover': {
                    backgroundColor: 'white',
                    opacity: [0.9, 0.8, 0.7],
                },
                alignItems: 'center'
            }}>
                <label className='label'>The Rick and Morty</label>
            </Box>
            <Box sx={{
                width: `#{window.screen.width}px`,
                backgroundColor: 'rgb(36 40 46);',
                '&:hover': {
                    backgroundColor: 'rgb(36 40 46);',
                },
                alignItems: 'center',
                padding: 15
            }}>
                <Persons></Persons>
            </Box>
        </Fragment>
    )
}

export default Home;