import { createRef, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from './../assets/images/logo.png'

import cardBackground from './../assets/images/gamecard_back.png'
import axios from 'axios'

const Game = (props) => {

    const history = useHistory()

    // game's state
    const [gameState, setGameState] = useState({
        isPlaying: false,
        gameId: null,
        win: false,
        prize: {
            id: null,
            amount: 0
        }
    })

    // whether the game can be played or not
    const [playState, setPlayState] = useState({
        canPlay: false,
        timeTillCanPlay: 0
    })
    
    let totalTime = 20
    let timeRemaining = totalTime
    let timeTillCanPlay = playState.timeTillCanPlay

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

    let correctTurns = 0

    const timerRef = createRef()
    const progressFillRef = createRef()
    const canPlayRef = createRef()

    // stores the selected pair by the user to check
    let turnCache = []

    useEffect(() => {
        // verify game
        axios.post(process.env.REACT_APP_API_PATH + 'game/verify', {
            user: props.user.id
        }).then((response) => {
            if ( !response.data.error ) {
                setPlayState({
                    canPlay: response.data.canPlay,
                    timeTillCanPlay: response.data.timeTillCanPlay
                })
            }
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    useEffect(() => {
        if ( gameState.isPlaying ) {
            let timer = setInterval(() => {
                if ( timerRef.current ) {
                    if ( timeRemaining > 0.0001 ) {
                        timeRemaining -= 0.01
                        timerRef.current.innerHTML = parseNum(timeRemaining)
    
                        if ( progressFillRef.current ) {
                            progressFillRef.current.style.height = Number(((totalTime - timeRemaining) / totalTime) * 100) + '%'
                        }
                    } else {
                        endGame()
                        clearInterval(timer)
                    }
                } else {
                    endGame()
                    clearInterval(timer)
                }
            }, 10)
        }

        if ( !playState.canPlay ) {
            let timerCanPlay = setInterval(() => {
                if ( canPlayRef.current ) {
                    if ( timeTillCanPlay > 0.0001 ) {
                        timeTillCanPlay -= 1

                        let secondsTillCanPlay = Math.floor(timeTillCanPlay % 60)
                        let minutesTillCanPlay = Math.floor((timeTillCanPlay / 60) % 60)
                        let hoursTillCanPlay = Math.floor((timeTillCanPlay / (60*60)) % 60)
                        canPlayRef.current.innerHTML = `${hoursTillCanPlay}:${minutesTillCanPlay}:${secondsTillCanPlay}`
                    }
                } else {
                    clearInterval(timerCanPlay)
                }
            }, 1000)
        }
    })
    
    const parseNum = (num) => {
        return Number(Math.abs(num)).toFixed(2).replace('.', ':')
    }

    const takeTurn = (index) => {
        if ( turnCache.length < 2 ) {
            turnCache.push(index)
        }
        
        if ( turnCache.length == 2 ) {
            checkPair(turnCache[0], turnCache[1])
        }
    }

    const checkPair = (cardOne, cardTwo) => {
        let firstCard = document.querySelector(`#card${cardOne} ~ label.game-card-content`)
        let secondCard = document.querySelector(`#card${cardTwo} ~ label.game-card-content`)

        if ( firstCard.style.backgroundImage == secondCard.style.backgroundImage ) {
            // same
            document.querySelector(`#card${cardOne}`).setAttribute('disabled', true)
            document.querySelector(`#card${cardTwo}`).setAttribute('disabled', true)

            correctTurns++
        } else {
            document.querySelectorAll('.game-card').forEach(card => {
                card.classList.add("shake")
            })
            setTimeout(() => {
                document.querySelector(`#card${cardOne}`).checked = false
                document.querySelector(`#card${cardTwo}`).checked = false
                document.querySelectorAll('.game-card').forEach(card => {
                    card.classList.remove("shake")
                })
            }, 500)
        }
        
        turnCache = []
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
                    <input type="checkbox" id={`card${i}`} onChange={() => {takeTurn(i)}} />
                    <label className="game-card-back" htmlFor={`card${i}`} style={{backgroundImage: `url('${cardBackground}')`}}></label>
                    <label className="game-card-content bg-center bg-contain bg-no-repeat" htmlFor={`card${i}`}  style={{backgroundImage: `url('${thisCardFace.default}')`}}></label>
                </div>
            )
        }

        return cardObject
    }

    const startGame = () => {

        axios.post(process.env.REACT_APP_API_PATH + 'game/start', {
            user: props.user
        }).then(response => {
            if ( !response.data.error ) {
                setGameState({
                    ...gameState,
                    isPlaying: true,
                    gameId: response.data.gameId,
                    prize: {
                        id: response.data.prize.id,
                        amount: response.data.prize.amount
                    }
                })
            }
        }).catch(err => {
            console.error(err)
        })
    }

    const endGame = () => {
        axios.post(process.env.REACT_APP_API_PATH + 'game/end', {
            userId: props.user.id,
            gameId: gameState.gameId,
            win: (correctTurns >= cardFaces.length/2) ? true : false,
            prize: gameState.prize
        }).then( response => {
            console.log(response)
            history.push('/win')
        }).catch( err => {
            console.error(err)
        })
    }

    return (
        <div className="flex flex-col p-4 bg-gradient-to-b from-white via-green-100 to-white relative">
            <div ref={progressFillRef} className="bg-green-600 absolute left-0 bottom-0 w-full z-10"></div>
            <div className="z-20">

                <div className="p-4 text-center">
                    <span className="text-green-900 bg-white font-bold p-2 text-6xl " ref={timerRef} >{ parseNum(timeRemaining) }</span>
                </div>

                <div className="grid grid-cols-2 w-full gap-1 m-auto my-2">
                    { gameCards(cardFaces.length) }
                </div>

                <div className="p-2 text-center">
                    <Link to="/terms">
                        <span className="text-sm text-theme-colors-dark">Terms &amp; Conditions</span>
                    </Link>
                </div>

                {!gameState.isPlaying && 
                    <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center p-4">

                    <div className="absolute bg-gradient-to-t from-gray-900 via-gray-500 to-white opacity-70 left-0 top-0 w-full h-full"></div>

                            {playState.canPlay ? 
                            (
                                <div className=" z-50 bg-white shadow-md p-2 flex flex-col items-center py-3 w-11/12">
                                    <h3 className="font-bold text-lg">Instructions</h3>
                                    <p>Find all the pairs before the end of the timer.</p>
                                    <p className="text-sm text-theme-colors-light mt-3">Once you start the game, you can't pause.</p>
        
                                    <button className="mt-3" onClick={startGame}>Start</button>
                                </div>
                            ) : (
                                <div className=" z-50 bg-white shadow-md p-2 text-center py-3 w-11/12">
                                    <p className="font-bold text-theme-colors-light mb-3"><span className="text-5xl" ref={canPlayRef}>{timeTillCanPlay}</span></p>
                                    <p>until next game!</p>
                                </div>
                            )}

                    </div>
                }
            </div>
        </div>
    )
}

export default Game