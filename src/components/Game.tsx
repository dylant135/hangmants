import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { WordContext } from "../context/WordContex";
import DisplayWord from "./DisplayWord";
import Hangman from "./Hangman";
import KeyBoard from "./KeyBoard";

export default function Game() {
    const { word, setWrongGuesses, wrongGuesses } = useContext(WordContext)
    const [correct, setCorrect] = useState<number[] | null>(null)


    function guess(event : React.MouseEvent<HTMLButtonElement>) {
        event.currentTarget.disabled = true
        const theGuess = event.currentTarget.innerText.toLowerCase()
        isCorrect(theGuess)
    }

    function isCorrect(theGuess: string) {
        if(word.includes(theGuess)) {
            let position:number[] = []
            for(let i = 0; i < word.length; i++) {
                if(word[i] === theGuess) {
                    position.push(i)
                }
            }
            setCorrect(position)
        } else {
            setWrongGuesses(prevState => {
                return prevState + 1
            })
            didLose()
        }
    }

    const navigate = useNavigate()
    function didLose() {
        if(wrongGuesses >= 5) {
            navigate('/loss')
        }
    }
    
    
    return (
        <div className="game">
            <Hangman />
            <DisplayWord
                correct={correct}
                setCorrect={setCorrect}
            />
            <KeyBoard
                guess={guess}
            />
        </div>
    )
}