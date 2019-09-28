import React from 'react';
import './App.css';
import Item from './item'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: ''
    };
  }

  componentDidMount(){
    this.UpdateNotes()
}

  handleChange = event => {
    this.setState({ value: event.target.value });
  }
 
  //ADD NOTES
  handleSubmit = () => {
 
    const notes= {
      notes: this.state.value
    };
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
 
    axios.post(`http://localhost:9000/add`, notes, axiosConfig)
      .then(res => {
        console.log(res);
      })
  }



//FIND ALL NOTE
UpdateNotes = () => {
 
  
  axios.get(`http://localhost:9000/find`)
    .then(res => {
      const items = res.data.notes
      this.setState({ items, value: '' })
    })
}



//DELETE NOTE
removeItem = (id) => {
  const id_delete = {
    id: id
  };
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  axios.post(`http://localhost:9000/delete`, id_delete, axiosConfig)
    .then(res => {
      console.log(res);
    })
    setTimeout(() => this.UpdateNotes(), 100)
}



//SET CHECKBOX
SetCheckbox = (id, notes, checkbox) => {
  const id_set = {
    id: id,
    notes: notes,
    checkbox: checkbox
  };
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  axios.post(`http://localhost:9000/set`, id_set, axiosConfig)
    .then(res => {
      console.log(res);
    })
    setTimeout(() => this.UpdateNotes(), 100)
}




  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit()
      setTimeout(() => this.UpdateNotes(), 100)
    }
  }


  render() {
    return (
      <div className="App">
        <div className="name-App">todos</div>
        <div className="input-App">
        <TextField
        type="text"
        autoComplete="off"
        placeholder="What needs to be done?"
        id="outlined-name get_num"
        label="Note"
        margin="normal"
        variant="outlined"
        value={this.state.value}
        onKeyDown={el => this._handleKeyDown(el)}
        onChange={this.handleChange}
      />
        </div>
        {
          this.state.items.map(el => {
            return < Item name={el.note} id={el._id} removeItem={this.removeItem} SetCheckbox={this.SetCheckbox} checkbox={el.checkbox}/>
          })
        }
      </div>
    );
  }
}