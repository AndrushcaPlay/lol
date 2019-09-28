import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



export default class Regestration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      login: 'andrey',
      pass: '12345',
      login1: '',
      pass1: ''
    };
  }

  CheckLogin = () => {
    if (this.state.pass === this.state.pass1 && this.state.login === this.state.login1) {
    this.props.history.push("/todolist")
    }
  }

  render() {
    return (
      <div className="wrapper_Login">
      <form action="/signup" method="post">
      <div className="Login_name">Log In</div>
      <div className="form">
        <div className="login">
        <TextField
        id="outlined-name"
        label="username"
        name="username"
        margin="normal"
        variant="outlined"
        onChange={el => this.setState({ login1: el.target.value })}
        required
      />
        </div>
        <div className="pass">
        <TextField
        type="password"
        id="outlined-name"
        label="Password"
        name="password"
        margin="normal"
        variant="outlined"
        onChange={el => this.setState({ pass1: el.target.value })}
        required
      />
        </div>
        <div className="email">
        <TextField
        type="text"
        id="outlined-name"
        label="email"
        name="email"
        margin="normal"
        variant="outlined"
        onChange={el => this.setState({ pass1: el.target.value })}
        required
      />
        </div>
        <div className="firstName">
        <TextField
        type="text"
        id="outlined-name"
        label="firstName"
        name="firstName"
        margin="normal"
        variant="outlined"
        onChange={el => this.setState({ pass1: el.target.value })}
        required
      />
        </div>
        <div className="lastName">
        <TextField
        type="text"
        id="outlined-name"
        label="lastName"
        name="lastName"
        margin="normal"
        variant="outlined"
        onChange={el => this.setState({ pass1: el.target.value })}
        required
      />
        </div>
      </div>
      <div className="Login_button" >
        <Button type="submit" onClick={this.CheckLogin} variant="contained" color="primary">LOGIN</Button>
      </div>
      </form>
      </div>
    );
  }
}