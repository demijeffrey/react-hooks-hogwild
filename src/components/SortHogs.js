import React from 'react'

function SortHogs ({ onNameCheck, onWeightClick }) {

    return (
        <div>
            Name A-Z <input type='checkbox' onChange={onNameCheck}></input>
            <br />
            Weight sm-lg <input type='checkbox' onChange={onWeightClick}></input>
        </div>
    )
}

export default SortHogs