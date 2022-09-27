import React from 'react'

function HogInfo ({ hog }) {
    return (
        <div>
            <h4>{hog.name}</h4>
            <li>Specialty: {hog.specialty}</li>
            <li>Weight: {hog.weight}</li>
            <li>Greased: {hog.greased ? 'Yes' : 'No'}</li>
            {/* <p>Highest Medal Achieved: {hog.highestmedalAchieved}</p> */}
        </div>
    )
}

export default HogInfo