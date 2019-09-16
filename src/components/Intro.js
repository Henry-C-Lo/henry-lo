import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { loadCSS } from '/Users/henrylo/Documents/WorkSpace/React/henry/node_modules/fg-loadcss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import hero from "../assets/images/hero.jpg";

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment:'fixed',
        height: '85vh',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        borderBottom: '.1rem solid white',
        fontFamily: 'Permanent Marker',
        position: 'relative',
        margin: '0 auto',
        '&:after': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: 8,
            left: 0,
            bottom: -5,
            borderBottom: '.1rem solid white',
        },
    },
    subTitle: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Permanent Marker',
        padding: 10,
    },
});

export default function Intro() {
    const classes = useStyles();

    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    return (
        <section
            id='home'
            className={classes.root}
        >
            <CssBaseline />
            <Grid
                style={{height: '100%'}}
                container
                alignItems="center"
            >
                <Container maxWidth='sm'>
                        <Grid item>
                            <Typography
                                variant='h1'
                                className={classes.title}
                            >
                                Henry Lo
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                className={classes.subTitle}
                            >
                                An interactive web designer with the passion of creativity
                            </Typography>
                        </Grid>
                </Container>
            </Grid>
        </section>
    );
}
