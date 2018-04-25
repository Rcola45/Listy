import React, {Component} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

class ListItem extends Component {
  constructor(props){
    super(props);
    // TODO: Add sub-items to listItems
    this.state={
      title:'', // The item title
      description:'', // The item description for more detail
      complete: false // Whether the item is completed or not
    };
  }

  renderCheckbox(){
    if(this.state.complete){
      return <Glyphicon glyph={'check'}/>
    }else{
      return <Glyphicon glyph={'unchecked'}/>
    }
  }

  render() {
    return(
        <div>
          <div className={'ListItem-complete'}>{this.renderCheckbox()}</div>
          <div className={'ListItem-title'}>{this.state.title}</div>
          <div className={'ListItem-description'}>{this.state.description}</div>
          <Button><Glyphicon glyph={'exit'}/></Button>
        </div>
    )
  }
}

export default ListItem;