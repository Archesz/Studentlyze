import React from 'react'
import { BsQuestion } from 'react-icons/bs'
import './Card.scss'

function Card(props) {
    return (
        <div className="card-container">
            
            <div className="card-image">
                
                <button className="card-help">
                    <BsQuestion />
                </button>

                Foto aqui

            </div>

            <div className="card-infos">

                <span className="card-author">{props.authors}</span>

                <span className="card-title">{props.title}</span>
                <span className="card-structure">{props.structure}</span>

                <span className="card-descript">{props.descript}</span>

            </div>

        </div>
    )
}

export default Card