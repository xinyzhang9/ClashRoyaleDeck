import React from 'react'

const Title = () => (
  <div style = {{textAlign: 'center'}}>
	  <img src={require('../img/king2.png')} style = {{
	      width: '60px',
	      display: 'inline-block',
	      marginRight: '5px'
	    }}/>
    	<div style = {{display:'inline-block', verticalAlign:'middle'}}>
	    	<h2 style = {{color: 'steelblue'}}>Deck Advisor For Clash Royale</h2>
	    	<h5 style = {{textAlign: 'center', color: 'gray'}}>
	      		Select cards from the list to start building your deck
	    	</h5>
    	</div>
    	<img src={require('../img/king.png')} style = {{
      		width: '60px',
      	display: 'inline-block',
    	}}/>
  </div>
)

export default Title
