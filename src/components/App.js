import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTiles from "./HogTiles";
import HogInfo from './HogInfo'
import FilterHogs from "./FilterHogs"

function App() {

	const [displayHogInfo, setDisplayHogInfo] = useState([])
	const [displayHogs, setDisplayHogs] = useState(hogs)
	const [filter, setFilter] = useState(false)
	const [check, setCheck] = useState(false)

	function handleClick (hog) {
        setDisplayHogInfo(hog)
    }

	function filterGreased() {
		const greasedHogs = displayHogs.filter(hog => {
			if(hog.greased === true) return hog
		})
		if(filter === true) return setDisplayHogs(hogs)
		setDisplayHogs(greasedHogs)
		setFilter(!filter)
    }

	function onNameCheck() {
        const nameAZ = [...hogs].sort((a, b) => a.name > b.name ? 1 : -1)
        setCheck(!check)
		if(check === false) setDisplayHogs(nameAZ)
		if(check === true) setDisplayHogs(hogs)
    }
	function onWeightClick() {
		const hogsByWeight = [...hogs].sort((a, b) => a.weight - b.weight)
		setCheck(!check)
		if(check === false) setDisplayHogs(hogsByWeight)
		if(check === true) setDisplayHogs(hogs)
	}

	return (
		<div className="App">
			<Nav />
			<FilterHogs onNameCheck={onNameCheck} onWeightClick={onWeightClick} filterGreased={filterGreased} filter={filter} />
			<HogTiles hogs={displayHogs} handleClick={handleClick} className='ui grid container' />
			<br />
			<HogInfo hog={displayHogInfo} />
		</div>
	);
}

export default App;
