import React, { Component } from 'react';
import './ListItem.css';

class List extends Component {
  render() {
    return (
      <div className="listitem">
          {this.props.name}
          <button className="listitem-remove" onClick={this.props.onClose}>Done</button>
      </div>
    );
  }
}

export default List;
