import React from 'react';
import './App.css';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

import axios from 'axios';


class App extends React.Component{
  constructor(){
    super()
      this.state = {
          friends: [],
          friend: {
            name: "",
            age: "",
            email: "",
          }
      }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then((res) => {
        // console.log(res)
        this.setState({friends: res.data});
        console.log(this.state.friends)
    })
    .catch((err) => {
        // console.log(err)
        this.setState({error: err.response.message });
    })
  }

  handleChanges = event => {
    // console.log(event.target.value)
    this.setState({
      friend:{
        ...this.state.friend, [event.target.name]: event.target.value, 
      }     
    })
  }

  render() {
    return(
      <div className="app-wrapper">
        <FriendForm handleChanges={this.handleChanges} />
        <Friends friends={this.state.friends} />
      </div>
    )
  }
}
export default App;
