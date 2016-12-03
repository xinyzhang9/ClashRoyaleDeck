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
                  padding: '5px',
                  textAlign: 'center'
               }}>
     <img src={img_src} style = {{
      width: '120px',
      display: 'block',
      borderRadius: '5px',
      padding: '2px',
      border: completed? "3px solid brown" : '1px solid orange'
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
