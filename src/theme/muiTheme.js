import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#52c7b8',
            main: '#009688',
            dark: '#00675b',
            contrastText: '#fff',
        },
        secondary: {
            main: '#00695c',
        }
    },
    overrides: {
        MuiDrawer: {
            paper: {
                background: '#009688',
                '& *': { color: 'rgba(255, 255, 255, 0.7)' },
            },
        },
    },
});



export default theme;
