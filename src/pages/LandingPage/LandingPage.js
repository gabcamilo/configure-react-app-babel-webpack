import React from 'react';

import Icon from '../../components/Icon/Icon';
import IconList from '../../components/IconList/IconList';

import reactIcon from '../../assets/react-icon.png'
import babelIcon from '../../assets/babel-icon.png'
import webpackIcon from '../../assets/webpack-icon.png'

import './LandingPage.css'

const LandingPage = () => {
	const icons = [
		{icon: babelIcon},
		{icon: webpackIcon},
	];
	return(
		<div id="landing-page">
			<Icon icon={reactIcon} title="This is a ReactJS App!"/>
			<IconList icons={icons} title="Powered by"/>
		</div>
	);
}

export default LandingPage;