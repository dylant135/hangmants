import React from "react";
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { WordContext } from "../context/WordContex"

export default function NewGamebtn() {
    const {setWord, setWrongGuesses} = useContext(WordContext)

    const navigate = useNavigate()
    function newGame() {
        setWord('')
        setWrongGuesses(0)
        navigate('/')
    }
    return (
        <div className="buttonContainer">
            <button type='button' onClick={newGame} className='newGamebtn'>New Game</button>
        </div>
    )
}