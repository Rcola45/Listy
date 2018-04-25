import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class List extends Component {
  constructor(props){
    super(props);
    this.state={
      title:this.props.title,
      listItems:[],
      newItem:null
    };
  }

  render() {
    return(
        <div>
          <div>{this.state.title}</div>
          {this.state.listItems.map((comp, i) => React.createElement(comp, { key: i}))}
          <Button>Add Item</Button>
        </div>
    )
  }
}

export default List;