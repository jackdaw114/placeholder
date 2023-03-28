import { modalUnstyledClasses } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';

const theme = createTheme({
    typography: {
        fontFamily: 'Tilt Neon',
    },


    palette:
    {
        primary: {
            main: '#000000  ',
            contrastText: '#FFFFFF',
            light: '#34a694',
            paper: '#f2eecb'
        },
        secondary: {
            light: '#358b7e',
            main: '#A63446  ',
            contrastText: '#fcdebe',
        },
        text: {
            primary: '#E8E8E8'
        },
        black: {
            50: '#f2f8f5',
            100: '#e9eeeb',
            200: '#dce1de',
            300: '#c9cecb',
            400: '#a4a9a6',
            500: '#838885',
            600: '#5c615e',
            700: '#494e4b',
            800: '#2c302e',
            900: '#0a100d',
            main: '#2c302e',
        },
        background: {
            default: '#010000 ',
            paper: '#2c302e'
        },

    },
})

export default theme