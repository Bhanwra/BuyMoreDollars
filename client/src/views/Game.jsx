import { createRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/images/logo.png'


const Game = (props) => {
    
    let timeRemaining = 20
    let totalCards = 10

    useEffect(() => {
        let timer = setInterval(() => {
            if ( timerRef.current && timeRemaining > 0 ) {
                timeRemaining -= 0.01
                timerRef.current.innerHTML = parseNum(timeRemaining)
            } else {
                clearInterval(timer)
                timerRef.current.innerHTML = parseNum(0)
            }
        }, 10)
    })

    const timerRef = createRef()
    
    const parseNum = (num) => {
        return Number(num).toFixed(2).replace('.', ':')
    }

    const gameCards = (cards) => {
        let cardObject = []
        for ( let i = 0; i < cards; i++ ) {
            cardObject.push(
                <div className="col-span-1 game-card">
                    <input type="checkbox" id={`card${i}`} />
                    <label className="game-card-back" htmlFor={`card${i}`}></label>
                    <label className="game-card-content" htmlFor={`card${i}`}></label>
                </div>
            )
        }

        return cardObject
    }

    return (
        <div className="flex flex-col p-4 bg-gradient-to-b from-white via-green-100 to-white">
            <div className="w-full mb-4">
                <img className="logo" src={logo} alt="BuyMore Dollars Logo"/>
            </div>

            <div className="p-4 text-center">
                <span className="text-green-900 font-bold p-2 text-6xl font-mono" ref={timerRef} >{ parseNum(timeRemaining) }</span>
            </div>

            <div className="grid grid-cols-2 w-full gap-1 m-auto my-2">
                { gameCards(totalCards) }
            </div>

            <div className="p-2 text-center">
                <Link to="/">
                    <span className="text-sm">Terms &amp; Conditions</span>
                </Link>
            </div>
        </div>
    )
}

export default Game