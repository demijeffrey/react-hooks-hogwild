import React from 'react'
// import HogInfo from './HogInfo'

function HogTiles ({ hogs, handleClick }) {

    const hogCards = hogs.map(hog => {
        return (
            <ul className='ui eight wide column card' key={hog.name} onClick={() => handleClick(hog)}>
                <h3>{hog.name}</h3>
                <img src={hog.image} alt='hog' />
                {/* <button>Hide</button> */}
            </ul>
        )
    })

    return (
        <div>
            {hogCards}
        </div>
    )
}

export default HogTiles