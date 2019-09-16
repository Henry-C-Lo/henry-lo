import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Typography from '@material-ui/core/Typography';
import paperTexture from "../assets/images/paperTexture.jpg";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import BatteryIcon from '@material-ui/icons/Battery20';

const useStyle = makeStyles({
    bg: {
        backgroundImage: `url(${paperTexture})`,
        borderBottom: '.5rem solid #474441',
    },
    secondBg:{
        backgroundColor: 'rgba(71,68,65,0.1)',
        paddingBottom: 1,
    },
    arrow: {
        width: 0,
        height: 0,
        borderLeft: '.6rem solid transparent',
        borderRight: '.6rem solid transparent',
        borderBottom: '.6rem solid transparent',
        borderTop: '.6rem solid #009688',
        margin: '0 auto'
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginTop: 20,
        padding: 23,
    }
});

export default function EducationAndExperience () {
    const classes = useStyle();

    const educationAndExperienceData =[
        {
            date: '2018 - present',
            icon: <WorkIcon/>,
            logoBgColor: '#00675b',
            title: 'Junior Developer',
            company: 'TRARA INC',
            location: 'San Jose, CA',
            description: 'Front End Developer, User Experience, Visual and Responsive Design'
        },
        {
            date: '2016 - 2017',
            icon: <WorkIcon/>,
            logoBgColor: '#00675b',
            title: 'Accounts Manager',
            company: 'Well Metal Craft',
            location: 'Taichung, Taiwan',
            description: 'Manufacture and Export, Sales, Schwarzkopf Display Project Team Lead'
        },
        {
            date: '2014 - 2016',
            icon: <WorkIcon/>,
            logoBgColor: '#00675b',
            title: 'Warehouse Manager',
            company: 'Strike Industries',
            location: 'Santa Ana, CA',
            description: 'Firearm Parts and Accessories, Manufacture, Online Marketing'
        },
        {
            date: 'Dec 2013',
            icon: <SchoolIcon/>,
            logoBgColor: '#009688',
            title: 'Bachelor of International Business',
            company: 'California State University, Fullerton',
            location: 'Fullerton, CA',
            description: 'Mihaylo College of Business and Economics, International Studies'
        },
    ];

    return (
        <section
            id='educationAndExperience'
            className={classes.bg}
        >
            <div className={classes.secondBg}>
                <div className={classes.arrow} />
                <Typography
                    className={classes.title}
                    variant='h3'
                    align='center'
                >
                    Education & Experience
                </Typography>
                <Typography
                    variant='subtitle1'
                    align='center'
                >
                    My previous associations
                </Typography>
                <VerticalTimeline>
                    {educationAndExperienceData.map(data => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            key={data.title}
                            date={data.date}
                            iconStyle={{ background: data.logoBgColor, color: '#fff' }}
                            icon={data.icon}
                        >
                            <h2 className="vertical-timeline-element-title">
                                {data.title}
                            </h2>
                            <h3 className="vertical-timeline-element-subtitle">
                                {data.company}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {data.location}
                            </h4>
                            <p>
                                {data.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                    <VerticalTimelineElement
                        date="18 years of happiness"
                        iconStyle={{ background: '#52c7b8', color: '#fff' }}
                        icon={<BatteryIcon />}
                    />
                </VerticalTimeline>
            </div>
        </section>
    )
}

