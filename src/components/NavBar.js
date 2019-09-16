import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink as Link } from 'react-router-hash-link';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import clsx from "clsx";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import QuoteIcon from '@material-ui/icons/FormatQuote';
import WorkIcon from '@material-ui/icons/Work';
import FolderIcon from '@material-ui/icons/Folder';


const navData = [
    {
        to: '/',
        icon: <HomeIcon style={{fontSize: 30}}/>,
        text: 'Home',
    },
    {
        to: '/#about',
        icon: <PersonIcon style={{fontSize: 30}}/>,
        text: 'About Me',
    },
    {
        to: '/#inspiration',
        icon: <QuoteIcon style={{fontSize: 30}}/>,
        text: 'Inspiring',
    },
    {
        to: '/#educationAndExperience',
        icon: <WorkIcon style={{fontSize: 30}}/>,
        text: 'Education & Experience',
    },
    {
        to: '/#portfolio',
        icon: <FolderIcon style={{fontSize: 30}}/>,
        text: 'My Portfolio',
    },

];


const useStyles = makeStyles(theme => ({
    fullList: {
        width: 'auto',
    },
    link: {
        textDecoration: 'none'
    },
    button: {
        zIndex: 1,
        position: 'fixed',
        padding: '1rem 0',
        borderBottomRightRadius: '1rem',
    },
    burgerMenu: {
        fontSize: 40,
        color: theme.palette.primary.dark
    },
    linkText: {
        textDecoration: 'none',
    },
}));


export default function NavBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };


    const fullList = side => (
        <div>
            <header
                className={classes.fullList}
                role="presentation"
                onClick={toggleDrawer(side, false)}
                onKeyDown={toggleDrawer(side, false)}
            >
                <List component='nav'>
                    {navData.map(data => (
                            <Button
                                style={{width: '100%'}}
                                key={data.text}
                            >
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="flex-start"
                                >
                                    <Link
                                        className={classes.link}
                                        to={data.to}
                                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                    >
                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                            alignItems="center"
                                        >
                                            <ListItemIcon>
                                                {data.icon}
                                            </ListItemIcon>
                                            <ListItemText className={classes.linkText} primary={data.text}/>
                                        </Grid>
                                    </Link>
                                </Grid>
                            </Button>
                    ))}
                </List>
            </header>
        </div>
    );

    return (
        <div>
            <Button
                className={classes.button}
                color='primary'
                onClick={toggleDrawer('top', true)}
            >
                <Icon className={clsx(classes.burgerMenu, 'fas fa-bars ')} />
            </Button>
            <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
                {fullList('top')}
            </Drawer>
        </div>
    );
}
