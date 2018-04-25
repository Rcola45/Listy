import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import firebase from '../firebase.js';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.state={
      title:'', // The list title
    };

    this.makeList = this.makeList.bind(this);
  }

  makeList(){
    const itemsRef = firebase.database().ref('lists');
    const list = {
      title: this.state.title,
    };
    itemsRef.push(list);
    this.setState({
      title: '',
    });
  }

  render() {
    return(
        <div className={"List-form"}>
          <FormGroup>
            <InputGroup>
              <FormControl
                type={"text"}
                placeholder = "List Title..."
                value={this.state.title}
                onChange={event => {this.setState({title: event.target.value})}}
                onKeyPress={event => {
                // Search on Enter
                if(event.key === 'Enter'){
                  this.makeList();
                }
                }}/>
              <InputGroup.Addon onClick={() => this.makeList()}>
                <Glyphicon glyph={'plus'}/>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </div>
    )
  }
}

export default ListItem;