import React from 'react';
import './counter.css'

const Counter = () => {
    return (
        <div className="container">
            <button id="add">
                Increment +
            </button>
            <button id="subtract">
                Decrement -
            </button>
        </div>
    )
}

export default Counter;