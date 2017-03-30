import { connect } from "react-redux";
import { todo_actions } from "./reducers/todo.js";

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (content) => dispatch({type: todo_actions.ADD_TODO, payload: content}),
    removeTodo: (index) => dispatch({type: todo_actions.REMOVE_TODO, payload: index})
});

export const map = (Component) => connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);