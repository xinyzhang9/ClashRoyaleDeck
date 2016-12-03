import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_COMMON':
      return todos.filter(t => t.rarity === 'common')
    case 'SHOW_RARE':
      return todos.filter(t => t.rarity === 'rare')
    case 'SHOW_EPIC':
      return todos.filter(t => t.rarity === 'epic')
    case 'SHOW_LEGENDARY':
      return todos.filter(t => t.rarity === 'legendary')
    case 'SHOW_TROOP':
      return todos.filter(t => t.type === 'troop')
    case 'SHOW_SPELL':
      return todos.filter(t => t.type === 'spell')
    case 'SHOW_BUILDING':
      return todos.filter(t => t.type === 'building')
  }
}


const mapStateToProps = (state) => {

  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
