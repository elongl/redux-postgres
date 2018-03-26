export default (state: string[] = [], action: Action): string[] => {
  switch (action.type) {
    case 'ADD_TODO': {
      if (action.todo) return [...state, action.todo];
      if (action.todos) return [...state, ...action.todos];
      break;
    }
    case 'CLEAR_TODOS':
      return [];
  }
  return state;
};
interface Action {
  type: string;
  todo?: string;
  todos?: string[];
}
