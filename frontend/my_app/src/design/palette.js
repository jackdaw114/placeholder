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
            main: '#0A100D',
            contrastText: '#FFFFFF',
            light: '#222B30'

        },
        secondary: {
            light: '#fcdebe',
            main: '#42b0f5  ',
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
            default: '#e8e8e8',
            paper: '#2c302e'
        },
        shadows: {
            default: '#ffffff',
            main: '#ffffff'
        }
    },
})

export default theme