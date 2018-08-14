import React from 'react';
import './counter.css'

const Display = ({count}) => {
    return (
        <div className="countDisplay">
            Counter =
            <span className="countNum">
                {count}
            </span>
        </div>
    )
}

export default Display;