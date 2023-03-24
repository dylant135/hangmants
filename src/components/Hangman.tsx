import React, { useContext } from "react";
import { WordContext } from "../context/WordContex";

export default function Hangman() {
    const { wrongGuesses } = useContext(WordContext)
    return (
        <div className="imgContainer">
            <img src={`/imgs/hangman${wrongGuesses}.jpeg`} alt='hangman img' />
        </div>
    )
}