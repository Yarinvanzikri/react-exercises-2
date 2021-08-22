import React, {useEffect, useState} from 'react';
import './Hits.css';

function Hits() {
	const [data, setData] =useState([]);
	useEffect(() => {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json')
			.then(res => res.json())
			.then(titles => setData(titles))
	},[])

	return (
		<div className="Hits">
			<h3>Hits:</h3>
			<p>
				Use the following API to make a list of hit titles:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json</code>
			</p>
			<ul>
				{data.map((title) => <li>{title.title}</li>)}
			</ul>
		</div>
	)
}

export default Hits;
