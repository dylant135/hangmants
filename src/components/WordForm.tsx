import React, { useContext, useState } from "react";
import { WordContext } from "../context/WordContex";
import { useNavigate } from 'react-router-dom'

export default function WordForm() {
    const { setWord } = useContext(WordContext)
    const [formData, setFormData] = useState('')

    function handleChange(event : React.ChangeEvent<HTMLInputElement>) {
        const e = event.target
        setFormData(e.value)
    }


    const navigate = useNavigate()
    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setWord(formData.toLowerCase().replace(' ', ''))
        navigate('/game')
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