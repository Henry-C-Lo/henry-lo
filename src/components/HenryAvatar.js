import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avator from '../assets/images/avator.jpg'

const useStyles = makeStyles({
    bg: {
        marginTop: -90,
    },
    avatar: {
        margin: 10,
        width: 240,
        height: 240,
        border: '.5rem solid white',
        boxShadow: '0 .3rem .2rem rgba(0, 0, 0, 0.3)'
    },
});

export default function HenryAvatar() {
    const classes = useStyles();

    return (
        <div
            align="center"
            className={classes.bg}
        >
            <Avatar
                alt="Henry Lo"
                src={avator}
                className={classes.avatar}
            />
        </div>
    );
}

