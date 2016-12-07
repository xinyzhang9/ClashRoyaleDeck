import React from 'react'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton 
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount 
} = ShareCounts;

const Footer = () => (
	<div style = {{textAlign: 'center'}}>
		<hr />
	 	<h5>
	  		<span style = {{color: 'green'}}> Author: </span>
	  		<a href = 'https://xinyzhang9.github.io/' target = '_blank' style = {{color: 'gray'}}>Xinyzhang9(阳哥)</a> | 
	  		<span style = {{color: 'brown'}}> Github: </span>
	  		<a href = 'https://github.com/xinyzhang9/ClashRoyaleDeck' target = '_blank' style = {{color: 'gray'}}>Source Code</a><span> | </span> 
	  		<FacebookShareButton style = {{display:'inline-block',color:'steelblue'}}url={'https://xinyzhang9.github.io/ClashRoyaleDeck/index.html'} children = {'Share on Facebook'}/>
	 	</h5>
	 	
  	</div>
)

export default Footer
