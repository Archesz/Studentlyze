import React from 'react'
import './InfoCard.scss'

function InfoCard(props) {
    return (
        <div className="infocard-container">
            
            <div className="infocard-image">
                <img src={props.img} alt={`Logo from ${props.title}`} className="infocard-image"/>
            </div>

            <div className="infocard-infos">
                <span className="infocard-title">{props.title}</span>
                <span className="infocard-descript">{props.descript}</span>
            </div>

        </div>
    )
}

export default InfoCard