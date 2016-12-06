import React, { PropTypes } from 'react'

const PureCard = ({ text, img_src }) => (
  <li
    style={{
      display: 'inline',
    }}
  >
    <p style = {{
                  display: 'inline-block',
                  padding: '1px',
                  textAlign: 'center'
               }}>
     <img src={require('../img/'+img_src+'.png')} style = {{
      width: '120px',
      display: 'block'
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
