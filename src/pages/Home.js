import React from 'react';
import HenryAvatar from '../components/HenryAvatar';
import About from "../components/About";
import Inspiration from "../components/Inspiration";
import EducationAndExperience from "../components/EducationAndExperience";
import Portfolio from "../components/Portfolio";
import Contacts from "../components/Contacts";

export default function Home () {
    return(
        <div id='home'>
            <HenryAvatar/>
            <About/>
            <Inspiration/>
            <EducationAndExperience/>
            <Portfolio/>
            <Contacts/>
        </div>
    )
}

