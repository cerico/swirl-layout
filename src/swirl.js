
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './header/header.css';

const classNames = require('classnames');



const Header = () => {

  const swirl = () => {
    // debugger
  

    return (
   

<svg width="100%" height="47" viewBox="0 0 1440 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="hero__div" preserveAspectRatio="xMinYMax meet">

<defs>
   <pattern id="img8" patternUnits="userSpaceOnUse"  width="57px" height="47px">
       <image xlinkHref="https://f001.backblazeb2.com/file/margate/runu.png" width="57px" height="47px" />
   </pattern>
</defs>
<g  id="Page-1" stroke="none" strokeWidth="1">
<path d="M0,0.0577405639 C117.504588,18.44359 269.602477,22.1720696 456.293666,11.2431795 C562.076057,5.05068514 730.784198,0.911127653 885.297232,3.27366179 C1157.17617,7.43074321 1386.98062,21.3276838 1440,38.3891927 L1440,46.9388979 L0,46.9388979 L0,0.0577405639 Z"  fill="url(#img8)" id="Path-9"></path></g>
</svg>

    )
  }


	return (
		<div id="add-swirl">
    {swirl()}
    </div>
	);

}

export default Header;