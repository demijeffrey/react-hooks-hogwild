import React from 'react'
import SortHogs from './SortHogs'

function FilterHogs ({ filterGreased, filter, onNameCheck, onWeightClick }) {

    return (
        <div>
            <button onClick={filterGreased}>{filter ? 'Show All Hogs' : 'Show Greased Hogs'}</button>
            <SortHogs onNameCheck={onNameCheck} onWeightClick={onWeightClick} />
        </div>
    )
}

export default FilterHogs