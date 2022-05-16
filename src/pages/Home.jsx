import React from 'react'
import Button from '../components/Button/Button'
import '../styles/home.scss'

import Menu from '../components/Menu/Menu'
import InfoCard from '../components/InfoCard/InfoCard'

import open from '../assets/images/open-source.png'
import services from '../assets/images/services.png'
import user from '../assets/images/user.png'

function Home() {

    return (
        <div className="home-container">
            
            <Menu active="Home"/>

            <div id="home-left">

                <div className="home-content">

                    <span className="home-title">Welcome to MicTool</span>

                    <span className="home-subtitle">For researchers, students and medical centers.</span>

                    <span className="home-descript">An open source application developed for the study and research in medical imaging.</span>

                    <Button classes="full big" text="Start"/>

                </div>

            </div>

            <div id="home-rigth">

            </div>

            <div id="home-footer">

                <InfoCard title="Open Source" descript="Open source software for reproducibility and development." img={open}/>
                <InfoCard title="Multiple Services" descript="Methods for different structures and services" img={services}/>
                <InfoCard title="User First" descript="Easy to use and install, for end users and developers." img={user}/>

            </div>

        </div>
    )
}

export default Home