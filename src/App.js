import React, { Component } from 'react';
import List from "./List";
import { map } from "./actions";
import './App.css';

class App extends Component {
  addTodo(){
    if(this.refs.input.value.length != 0){
      this.props.addTodo(this.refs.input.value);
      this.refs.input.value = "";
    }
  }
  render() {
    return (
      <div className="app">
        <h1 className="app-title">My Todo List</h1>
        <List />
        <input type="text" placeholder="Enter a todo" ref="input" className="add-todo-input" />
        <button onClick={this.addTodo.bind(this)} className="add-todo-button">Add Todo</button>
      </div>
    );
  }
}

export default map(App);
