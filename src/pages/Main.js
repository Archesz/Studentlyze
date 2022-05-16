import React from 'react'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import '../styles/main.scss'

function Main() {
    return (
        <div id="main-container">
            
            <div className="main-header">

                <span className="main-title">Mictool</span>

            </div>

            <div className="main-content">

                <Card title="CSV File" structure="Lista" authors="Jovi" descript="Gerar arquivo CSV"/>

                <Card title="Pick Color" structure="Color" authors="Jovi" descript="Generate pallete of colors"/>

                <Button text="Testar" onClick={window['teste']}/>

            </div>

        </div>
    )
}

export default Main