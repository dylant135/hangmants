import React, { useContext, useEffect, useState } from "react";
import { WordContext } from "../context/WordContex";

type displayProps = {
    correct: number[] | null,
    setCorrect: React.Dispatch<React.SetStateAction<number[] | null>>

}

export default function DisplayWord({ correct, setCorrect }: displayProps) {
    const { word } = useContext(WordContext)
    const l = word.length
    let [showWord, setShowWord] = useState<string[]>([])
    
    //initial dashes
    useEffect(() => {
        let dashes = []
        for(let i = 0; i < l; i++) {
            dashes.push('_')
        }
        setShowWord(dashes)
    }, [l])

    //update dashes with correct guessed letters
    useEffect(() => {
        if(correct === null) return
        const letter = word[correct[0]].toUpperCase()
        
        setShowWord(prevState => {
            for(let i = 0; i < correct.length; i++) {
                prevState[correct[i]] = letter
            }
            return prevState
        })
        setCorrect(null)
        
    }, [correct, setCorrect, showWord, word])

    //check to see if won
    useEffect(() => {
        if(showWord.length === 0) return
        
        if(showWord.includes('_')) {
            console.log('not yet')
        } else {
            console.log('you win')
        }
    }, [showWord, correct])
    
    return (
        <div>
            <h1 className="center">{showWord.join(' ')}</h1>
        </div>
    )
}