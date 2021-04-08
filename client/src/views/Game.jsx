import { createRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/images/logo.png'

import cardBackground from './../assets/images/gamecard_back.png'

const Game = (props) => {

    let totalTime = 20
    let timeRemaining = totalTime
    let totalCards = 10

    let cardFaces = [
        require('./../assets/images/burger.png'),
        require('./../assets/images/kick-o-matic.png'),
        require('./../assets/images/logo.png'),
        require('./../assets/images/raw-cabbage.png'),
        require('./../assets/images/taco.png'),
        require('./../assets/images/burger.png'),
        require('./../assets/images/kick-o-matic.png'),
        require('./../assets/images/logo.png'),
        require('./../assets/images/raw-cabbage.png'),
        require('./../assets/images/taco.png')
    ]

    useEffect(() => {
        let timer = setInterval(() => {
            if ( timerRef.current ) {
                if ( timeRemaining > 0.0001 ) {
                    timeRemaining -= 0.01
                    timerRef.current.innerHTML = parseNum(timeRemaining)

                    if ( progressFillRef.current ) {
                        progressFillRef.current.style.height = Number(((totalTime - timeRemaining) / totalTime) * 100) + '%'
                    }
                } 
            } else {
                clearInterval(timer)
            }
        }, 10)
    })

    const timerRef = createRef()

    const progressFillRef = createRef()
    
    const parseNum = (num) => {
        return Number(num).toFixed(2).replace('.', ':')
    }

    const gameCards = (cards) => {
        let cardObject = []
        for ( let i = 0; i < cards; i++ ) {
            let randomIndex = Math.floor(Math.random() * cardFaces.length)

            let thisCardFace = cardFaces[randomIndex]

            cardFaces = cardFaces.filter((val, index) => {
                if ( index != randomIndex ) {
                    return val
                }
            })

            cardObject.push(
                <div key={`gameCard${i}`} className="col-span-1 game-card">
                    <input type="checkbox" id={`card${i}`} />
                    <label className="game-card-back" htmlFor={`card${i}`} style={{backgroundImage: `url('${cardBackground}')`}}></label>
                    <label className="game-card-content bg-center bg-contain bg-no-repeat" htmlFor={`card${i}`}  style={{backgroundImage: `url('${thisCardFace.default}')`}}></label>
                </div>
            )
        }

        return cardObject
    }

    return (
        <div className="flex flex-col p-4 bg-gradient-to-b from-white via-green-100 to-white relative">
            <div ref={progressFillRef} className="bg-green-600 absolute left-0 bottom-0 w-full z-10"></div>
            <div className="z-20">

                <div className="p-4 text-center">
                    <span className="text-green-900 bg-white font-bold p-2 text-6xl font-mono" ref={timerRef} >{ parseNum(timeRemaining) }</span>
                </div>

                <div className="grid grid-cols-2 w-full gap-1 m-auto my-2">
                    { gameCards(totalCards) }
                </div>

                <div className="p-2 text-center">
                    <Link to="/terms">
                        <span className="text-sm">Terms &amp; Conditions</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Game