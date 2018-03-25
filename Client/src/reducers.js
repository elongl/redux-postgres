export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      if (action.todo) return [...state, action.todo]
      if (action.todos) return [...state, ...action.todos]
      break
    }
    case 'CLEAR_TODOS':
      return []

    default:
      return state
  }
}
