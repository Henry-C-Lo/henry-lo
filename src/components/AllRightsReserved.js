import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ArrowIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles({
    title:{
        color: 'white',
        padding: 30,
    },
    fab: {
        marginLeft: 20,
        marginRight: 20,

    }
});

export default function AllRightReserved () {
    const classes = useStyles();

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div style={{backgroundColor: '#474441'}}>
            <Grid
                container
                direction='row'
                justify='space-between'
                alignItems='center'
            >
                <Grid item>
                    <Typography
                        variant="body1"
                        align='center'
                        className={classes.title}
                    >
                        © 2019 All Rights Reserved
                    </Typography>
                </Grid>
                <Grid item>
                        <Fab
                            color="primary"
                            className={classes.fab}
                            onClick={scrollToTop}
                        >
                            <ArrowIcon style={{fontSize: 50}} />
                        </Fab>
                </Grid>
            </Grid>
        </div>
    )
}
