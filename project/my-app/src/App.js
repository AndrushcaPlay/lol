import React from 'react';
import './App.css';
import ToDoList from './todoList'
import Autorization from './Autorization';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Regestration from './regestration';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <Switch>
            <Route path="/login" component={Autorization} />
            <Route path="/todolist" component={ToDoList} />
            <Route path="/reg" component={Regestration} />
            <Redirect to='/reg' />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}