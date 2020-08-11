import React, { useState } from 'react'
import './AddTask.css'

const AddTask = ({ add }) => {

    const [text, setText] = useState('')
    const [checked, setChecked] = useState(false)
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

    const minDate = new Date().toISOString().slice(0, 10)

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleChecked = (e) => {
        setChecked(e.target.checked)
    }

    const handleClick = () => {
        const addTask = add(text, date, checked)
        if (addTask) {
            setText('')
            setChecked(false)
            setDate(new Date().toISOString().slice(0, 10))
        }
    }

    return (
        <div className="form">
            <input type="text" placeholder="dodaj zadanie" value={text} onChange={handleText} />
            <input type="checkbox" checked={checked} id="important" onChange={handleChecked} />
            <label htmlFor="important">Priorytet</label><br />
            <label htmlFor="date">Do kiedy zrobić</label>
            <input type="date" id="date" value={date} min={minDate} onChange={handleDate} /><br />
            <button onClick={handleClick}>Dodaj</button>
            <hr></hr>
        </div>
    )
}

export default AddTask