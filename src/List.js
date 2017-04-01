import React, { Component } from 'react';
import { map } from "./actions";
import ListItem from "./ListItem";

class List extends Component {
  onClose(index){
    this.props.removeTodo(index);
  }
  render() {
    console.log(this.props);
    return (
      <div className="list">
          {this.props.todos.map((item, index) => <ListItem 
          key={item}
          name={item} 
          onClose={this.onClose.bind(this, index)} />)}
      </div>
    );
  }
}

export default map(List);
