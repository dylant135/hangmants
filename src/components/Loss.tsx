import React, { useContext } from "react";
import { WordContext } from "../context/WordContex";
import NewGamebtn from "./NewGamebtn";

export default function End() {
    const { word } = useContext(WordContext)
    return (
        <div className="end">
            <div className="imgContainer">
                <img src='/imgs/hangman6.jpeg' alt='hangman' />
            </div>
            <h1 className="center">You Lost, the word was {word}</h1>
            <NewGamebtn />
        </div>
    )
}