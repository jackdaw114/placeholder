import { IconButton, InputBase, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../design/palette";
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import styled from "@emotion/styled";


const Search = styled('input', {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, searchToggle }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(searchToggle && {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


export default function SearchBar() {

    const [searchToggle, setSearchToggle] = useState(false);
    const handleSearchOpen = () => {
        setSearchToggle(true);
    };

    const handleSearchClose = () => {
        setSearchToggle(false);
    };

    return (
        <Paper className="main-div" sx={{ backgroundColor: 'transparent', marginTop: 2 }} elevation='0'>
            <Box component={'form'} onMouseOver={handleSearchOpen} elevation='0' sx={{ display: 'flex', flexShrink: 1, justifyContent: 'center', borderRadius: 100, display: 'flex', alignItems: 'center', width: 'auto', padding: 1, backgroundColor: theme.palette.secondary.main }}>
                <IconButton size='large' sx={{ color: 'white' }} ><SearchIcon /></IconButton>
                <InputBase onBlur={handleSearchClose} sx={{ fontSize: 20, backgroundColor: theme.palette.secondary.main, borderRadius: 5, ...(!searchToggle && { display: 'none' }), width: 400 }} placeholder="enter service name to search for">
                </InputBase>
            </Box>
        </Paper >
    )
}