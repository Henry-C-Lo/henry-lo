import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import paperTexture from "../assets/images/paperTexture.jpg";

const useStyles = makeStyles({
    About: {
        backgroundImage: `url(${paperTexture})`,
        borderTop: '.5rem solid #009688',
        marginTop: -170,
        paddingTop: 180,
        paddingBottom: 100,
    },
    greeting: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        padding: '2rem 0',
    },
    signature:{
        fontFamily: 'Mr Dafoe',
        padding: '4rem 0',
    },
    button: {
        padding: 0,
    },
    icon: {
        fontSize: 60
    },
    iconDescription: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
});


export default function About() {
    const classes = useStyles();

    const navData = [
        {
            color: 'teal',
            icon: <Icon className={clsx(classes.icon, 'fa fa-file')} />,
            text: 'Resume',
            to: '/resume'
        },
        {
            color: '#0077B5',
            icon: <Icon className={clsx(classes.icon, 'fab fa-linkedin')} />,
            text: 'LinkedIn',
            to:'/linkedIn'
        },
        {
            color: 'black',
            icon: <Icon className={clsx(classes.icon, 'fab fa-github-square')} />,
            text: 'GitHub',
            to:'/gitHub'
        },
    ];

    return (
        <section
            id='about'
            className={classes.About}
        >
            <CssBaseline />
            <Container maxWidth="md">
                <Typography
                    variant='h2'
                    align="center"
                    className={classes.greeting}
                >
                    welcome to my site!
                </Typography>
                <Typography
                    variant='body1'
                    align='justify'
                >
                    I’m a junior developer who has spent 6 months going through an intensive private boot camp in TRARA
                    Inc. Although I am relatively new to this industry, I feel that I have a solid grasp of the core
                    concepts used with React/Redux. Recently, I've also discovered Flutter and played with it for the
                    past month, it's a Google’s framework for mobile development. Being able to build mobile app in
                    both ios and android simultaneity is amazing. Web design and front end web development is evolving
                    constantly accelerating pace. Although it keeps makes it easy to feel like I'm falling behind. I do
                    enjoy the learning process and front end development.
                </Typography>
                <Typography
                    variant='h2'
                    align="center"
                    className={classes.signature}
                >
                    Henry Lo
                </Typography>
                <Grid
                    container
                    align='center'
                    justify='center'
                >
                    {navData.map(data => (
                        <Grid
                            item
                            xs={12}
                            sm={2}
                            key={data.text}
                        >
                            <nav>
                                <Button
                                    className={classes.button}
                                    style={{color: data.color}}
                                    component={Link}
                                    to={data.to}
                                >
                                    {data.icon}
                                </Button>
                            </nav>
                            <Typography
                                variant='h6'
                                className={classes.iconDescription}>
                                {data.text}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}
