import React from "react";

type KeyBoardProps = {
    guess: React.MouseEventHandler
}

export default function KeyBoard({ guess }: KeyBoardProps) {
    return (
        <div className="keyboard">
            <button onClick={guess} className='key'>A</button>
            <button onClick={guess} className='key'>B</button>
            <button onClick={guess} className='key'>C</button>
            <button onClick={guess} className='key'>D</button>
            <button onClick={guess} className='key'>E</button>
            <button onClick={guess} className='key'>F</button>
            <button onClick={guess} className='key'>G</button>
            <button onClick={guess} className='key'>H</button>
            <button onClick={guess} className='key'>I</button>
            <button onClick={guess} className='key'>J</button>
            <button onClick={guess} className='key'>K</button>
            <button onClick={guess} className='key'>L</button>
            <button onClick={guess} className='key'>M</button>
            <button onClick={guess} className='key'>N</button>
            <button onClick={guess} className='key'>O</button>
            <button onClick={guess} className='key'>P</button>
            <button onClick={guess} className='key'>Q</button>
            <button onClick={guess} className='key'>R</button>
            <button onClick={guess} className='key'>S</button>
            <button onClick={guess} className='key'>T</button>
            <button onClick={guess} className='key'>U</button>
            <button onClick={guess} className='key'>V</button>
            <button onClick={guess} className='key'>W</button>
            <button onClick={guess} className='key'>X</button>
            <button onClick={guess} className='key'>Y</button>
            <button onClick={guess} className='key'>Z</button>
        </div>
    )
}