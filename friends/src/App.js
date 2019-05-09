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
            name: '',
            age: '',
            email: '',
        }
          // postSuccessMessage: '',
          // postError: '',
      }
  }

  handleChanges = event => {
    // console.log(event.target.value)
    // console.log(event.target)
    this.setState({
        friend: {...this.state.friend, [event.target.name]: event.target.value,}     
    })
  }

  postFriend = () => {
    axios.post('http://localhost:5000/friends', this.state.friend)
    .then((res) => {
      console.log (res)
      this.setState({
        friends: [...res.data,],
        friend: {
          name: '',
          age: '',
          email: '',
        } 
      })
    })
    .catch((err) => {
      console.log (err)
    })
  }
  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then((res) => {
      console.log (res)
      this.setState({
        friends: [...res.data]
      })
    })
    .catch((err) => {
      console.log (err)
    })
  }

  updateFriend = (friend) => {
    if(this.state.friend.name){
      friend.name = this.state.friend.name
    }
    if(this.state.friend.age){
      friend.age = this.state.friend.age
    }
    if(this.state.friend.email){
      friend.email = this.state.friend.email
    }
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then((res) => {
      console.log (res)
      this.setState({
        friends: [...res.data]
      })
    })
    .catch((err) => {
      console.log (err)
    })
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then((res) => {
        // console.log(res)
        this.setState({friends: res.data});
        // console.log(this.state.friends)
    })
    .catch((err) => {
        // console.log(err)
        this.setState({error: err.response.message });
    })
  }


  render() {
    return(
      <div className="app-wrapper">
        <FriendForm friend={this.state.friend} postFriend={this.postFriend} handleChanges={this.handleChanges} />
        <Friends friends={this.state.friends} deleteFriend={this.deleteFriend} updateFriend={this.updateFriend} />
      </div>
    )
  }
}
export default App;
