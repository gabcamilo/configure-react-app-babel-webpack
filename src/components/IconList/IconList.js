import React from 'react';

import IconCard from '../IconCard/IconCard';

import './IconList.css';

const IconList = ({icons, title}) => {
	return (
		<div className="icon-list">
			<h1>{title}</h1>
			<ul>
				{icons.map((icon, index) => (
					<li key={`icon-${index}`}><IconCard icon={icon.icon}/></li>
				))}
			</ul>
		</div>
	)
}
export default IconList;