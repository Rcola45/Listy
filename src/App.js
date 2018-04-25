import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import firebase from './firebase.js';

import List from './components/List';
import ListForm from './components/ListForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      lists: [],
      showAddList: false
    };

    this.showHideListCreate = this.showHideListCreate.bind(this);
  }

  componentWillMount(){
    // Load lists from database
  }

  showHideListCreate(){
    this.setState({showAddList: !this.state.showAddList});
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('lists');
    itemsRef.on('value', (snapshot) => {
      let lists = snapshot.val();
      let newState = [];
      for (let list in lists) {
        newState.push(
          lists[list].title
        );
      }
      this.setState({
        lists: newState
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Listy</h1>
        </header>
        <div className={"App-body"}>
          <div>
            {this.state.lists.map((title, i) => <List key={i} title={title}/>)}
          </div>
          <div>
            <Button bsStyle={'primary'} onClick={this.showHideListCreate}>Create List</Button>
            { this.state.showAddList ? <ListForm /> : null }
          </div>
        </div>
        <div>
          <p>Application running in {process.env.NODE_ENV} mode</p>
          <p>Secret code is {process.env.REACT_APP_SECRET_CODE}</p>
        </div>
      </div>
    );
  }
}

export default App;
