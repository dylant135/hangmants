import React, { useContext, useState } from "react";
import { WordContext } from "../context/WordContex";

export default function WordForm() {
    const { setWord } = useContext(WordContext)
    const [formData, setFormData] = useState('')

    function handleChange(event : React.ChangeEvent<HTMLInputElement>) {
        const e = event.target
        setWord(formData)
        setFormData(e.value)
    }


    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setFormData('')
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