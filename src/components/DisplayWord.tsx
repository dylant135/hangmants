import React, { useContext } from "react";
import { WordContext } from "../context/WordContex";

export default function DisplayWord() {
    const { word } = useContext(WordContext)
    console.log(word)
    
    return (
        <div>

        </div>
    )
}