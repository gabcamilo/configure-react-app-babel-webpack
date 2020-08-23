import React from 'react';
import Icon from '../Icon/Icon'

import './IconCard.css'

const IconCard = ({icon, alt, caption}) => {
	return(
		<div className="icon-card">
			<Icon icon={icon} alt={alt} caption={caption}/>
		</div>
	);
}

export default IconCard;