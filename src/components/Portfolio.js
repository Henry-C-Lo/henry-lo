import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import paperTexture from "../assets/images/paperTexture.jpg";
import munchiesHero from '../assets/images/munchiesHero.png';
import munchiesGallery from '../assets/images/munchiesGallery.png';
import munchiesTestimonial from '../assets/images/munchiesTestimonial.png';
import munchiesCombo from '../assets/images/munchiesCombo.png';
import munchiesAbout from '../assets/images/munchiesAbout.png';
import munchiesForm from '../assets/images/munchiesForm.png';
import trafficLight from '../assets/images/trafficLight.png';
import tenEight from '../assets/images/tenEight.png';


const tileData = [
    {
        id: 1,
        img: munchiesHero,
        title: 'Munchies Hero',
    },
    {
        id: 2,
        img: munchiesGallery,
        title: 'Munchies Gallery',
    },
    {
        id: 3,
        img: munchiesCombo,
        title: 'munchies Combo',
    },
    {
        id: 4,
        img: munchiesAbout,
        title: 'munchies About',
    },
    {
        id: 5,
        img: munchiesTestimonial,
        title: 'munchies Testimonial',
    },
    {
        id: 6,
        img: munchiesForm,
        title: 'munchies Form',
    },
    {
        id: 7,
        img: trafficLight,
        title: 'Traffic Light',
    },
    {
        id: 8,
        img: tenEight,
        title: 'Ten Eight',
    },
];

const useStyles = makeStyles({
    bg: {
        backgroundImage: `url(${paperTexture})`,
        borderBottom: '.5rem solid #474441',
    },
    text:{
        color: 'white',
        backgroundColor: 'rgba(0,150,136,0.7)',
        textTransform: 'uppercase',
    },
    title: {
        fontWeight: 'bold',
        paddingTop: 50,
    },
    subtitle: {
        paddingBottom: 50,
    },
    root: {
        flexGrow: 1,
    },
    arrow: {
        width: 0,
        height: 0,
        borderLeft: '.6rem solid transparent',
        borderRight: '.6rem solid transparent',
        borderBottom: '.6rem solid transparent',
        borderTop: '.6rem solid #474441',
        margin: '0 auto'
    },
    portfolioImg: {
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        opacity: 0.7,
        transform: 'scale(1.3)',
        transition: 'transform 0.5s, opacity 0.5s',
        '&:hover': {
            opacity: 1,
            transform: 'scale(1.06)',
        },
    },
});


export default function Portfolio() {
    const classes = useStyles();

    return (
        <section
            id='portfolio'
            className={classes.bg}>
                <div className={classes.text}>
                    <Typography
                        variant='h3'
                        align='center'
                        className={classes.title}
                    >
                        My Portfolio
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        align='center'
                        className={classes.subtitle}
                    >
                        Here is few of my projects
                    </Typography>
                </div>
                <div className={classes.root}>
                    <Grid
                        container
                        justify='center'
                    >
                        {tileData.map(tile => (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={3}
                                key={tile.id}
                            >
                                <div className={classes.portfolioImg}>
                                    <img
                                        className={classes.img}
                                        src={tile.img}
                                        alt={tile.title} />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
        </section>
    );
}
