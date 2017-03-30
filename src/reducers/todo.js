export const todo_actions = {
  ADD_TODO: "add_todo",
  REMOVE_TODO: "remove_todo"
};

export default function todoReducer (state = { todos: [] }, action) {
    console.log(action);
    switch (action.type) {
        case todo_actions.ADD_TODO:
            state = { todos: [...state.todos, action.payload] };
            return state;
        case todo_actions.REMOVE_TODO:
            const todos = state.todos;
            todos.splice(action.payload, 1)
            state = { todos: [...todos] };
            return state;
        default:
            return state;
    }
}