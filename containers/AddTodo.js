import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className = "form-inline" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
      <div className = "form-group">
        <input className = "form-control" ref={node => {
          input = node
        }} />
        <button className="btn btn-default" type="submit">
          Add Todo
        </button>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
