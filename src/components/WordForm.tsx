import React, { useContext, useState } from "react";
import { WordContext } from "../context/WordContex";

export default function WordForm() {
    const { setWord } = useContext(WordContext)
    const [formData, setFormData] = useState('')

    function handleChange(event : React.ChangeEvent<HTMLInputElement>) {
        const e = event.target
        setFormData(e.value)
    }


    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setFormData(prevState => {
            prevState.toLowerCase()
            prevState.replace(' ', '')
            console.log(prevState)
            return prevState
        })
        setWord(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder="Word"
                value={formData}
                onChange={handleChange}
            />
            <button className="submitbtn">Submit</button>
        </form>
    )
}