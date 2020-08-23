import React from 'react';

import './Icon.css'

const Icon = ({title, caption, icon, alt}) => {
	return (
		<div className="icon">
			{title && <h1>{title}</h1>}
			<img src={icon} alt={alt}/>
			{caption && <p>{caption}</p>}
		</div>
	)
}
export default Icon;