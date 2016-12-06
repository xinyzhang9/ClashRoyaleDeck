import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, img_src }) => (
  <li
    onClick={onClick}
    style={{
      opacity: completed ? 0.65 : 1,
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
      display: 'block',
      // outlineOffset: '-4px',
      // outline: completed? "2px solid steelblue" : null
      boxShadow:completed?'0px 0px 5px 0px inset':null
     }}/>
     {text}
    </p>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  img_src: PropTypes.string.isRequired
}

export default Todo
