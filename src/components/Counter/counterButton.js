import React from 'react';
import './counter.css'

const Counter = () => {
    return (
        <div className="container">
            <button className="count">
                Increment +
            </button>
            <button className="count">
                Decrement -
            </button>
        </div>

    )
}

export default Counter;