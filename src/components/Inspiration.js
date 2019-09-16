import React from 'react'
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Avatar from "@material-ui/core/Avatar";
import SwipeableViews from "react-swipeable-views";
import hero2 from "../assets/images/hero2.jpg";
import steveJobs from '../assets/images/steveJobs.jpg'
import billGates from '../assets/images/billGates.jpg'
import jonathanGillette from '../assets/images/jonathanGillette.jpg'
import paulCookson from '../assets/images/paulCookson.jpg'
import satyaNadella from '../assets/images/satyaNadella.jpg'
import QuoteIcon from '@material-ui/icons/FormatQuote';

const useStyles = makeStyles({
    bg: {
        backgroundImage: `url(${hero2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment:'fixed',
        height: '85vh',
        borderBottom: '.5rem solid #009688',
        position:'relative',
    },
    noContainerGrid: {
        width: '100%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    title: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 10,
    },
    avatar: {
        margin: '.2rem auto',
        width: 60,
        height: 60,
        border: '.1rem solid white',
        boxShadow: '0 .3rem .2rem rgba(0, 0, 0, 0.3)',
    },
    bigIndicator: {
        height: 5,
    },
    quotes: {
        color: 'white',
        textAlign: 'center',
        fontFamily:'Helvetica',
    },
    quotationMark: {
        fontSize: 60,
    },
    quote: {
        margin: '0 auto',
    },
});

const avatarData =[
    {
        number: 0,
        name: 'Steve Jobs',
        src: steveJobs,
        quote: 'Everybody in this country should learn to program a computer. Because it teaches you how to think.',
    },
    {
        number: 1,
        name: 'Bill Gates',
        src: billGates,
        quote: 'I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.',
    },
    {
        number: 2,
        name: 'Jonathan Gillette',
        src: jonathanGillette,
        quote: 'When you don\'t create things, you become defined by your tastes rather than ability. Your tastes only narrow & exclude people. So create.',

    },
    {
        index: 3,
        name: 'Paul Cookson',
        src: paulCookson,
        quote: 'Websites promote you 24/7. No employee will do that.',
    },
    {
        index: 4,
        name: 'Satya Nadella',
        src: satyaNadella,
        quote: 'This is a software-powered world.',
    },
];

function TabPanel(props) {
    const { children} = props;
    const classes = useStyles();

    return (
        <div className={classes.quotes}>
            <QuoteIcon className={classes.quotationMark} />
            <Typography variant='h5'>
                {children}
            </Typography>
        </div>
    );
}

export default function Inspiration () {
    const classes = useStyles()
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }

    return (
        <section
            id='inspiration'
            className={classes.bg}
        >
            <div className={classes.noContainerGrid}>
                <Typography
                    variant='h3'
                    align='center'
                    className={classes.title}
                >
                    you inspire me!
                </Typography>
                <AppBar
                    position="static"
                    style={{margin: '1rem 0'}}
                >
                    <Tabs
                        classes={{indicator: classes.bigIndicator }}
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                    >
                        {avatarData.map(data => (
                            <Tab
                                key={data.name}
                                label={
                                    <div>
                                        <Avatar
                                            alt={data.name}
                                            src={data.src}
                                            className={classes.avatar}
                                        />
                                        <Typography
                                            variant='caption'
                                            className={classes.name}
                                        >
                                            {data.name}
                                        </Typography>
                                    </div>
                                }
                            />
                        ))}
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    {avatarData.map(data => (
                        <Grid
                            item xs={10} sm={6}
                            className={classes.quote}
                            key={data.name}
                        >
                            <TabPanel
                                value={value}
                                index={data.index}
                                dir={theme.direction}
                            >
                                {data.quote}
                            </TabPanel>
                        </Grid>
                    ))}
                </SwipeableViews>
            </div>
        </section>
    );
}

