import React, { useContext, useEffect, useState } from "react";
import { WordContext } from "../context/WordContex";

export default function DisplayWord() {
    const { word } = useContext(WordContext)
    const l = word.length
    let [showWord, setShowWord] = useState<string[]>([])

    
    useEffect(() => {
        let dashes = []
        for(let i = 0; i < l; i++) {
            dashes.push('_')
        }
        setShowWord(dashes)
    }, [l])
    
    
    return (
        <div>
            <h1 className="center">{showWord.join(' ')}</h1>
        </div>
    )
}