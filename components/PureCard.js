import React, { PropTypes } from 'react'

const PureCard = ({ text, img_src }) => (
  <li
    style={{
      display: 'inline',
    }}
  >
    <p style = {{
                  display: 'inline-block',
                  padding: '5px',
                  textAlign: 'center'
               }}>
     <img src={require('../img/'+img_src+'.png')} style = {{
      width: '120px',
      display: 'block',
      borderRadius: '5px',
      padding: '2px',
      border: '1px solid orange'
     }}/>
     {text}
    </p>
  </li>
)

PureCard.propTypes = {
  text: PropTypes.string.isRequired,
  img_src: PropTypes.string.isRequired
}

export default PureCard
