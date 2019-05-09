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
          postSuccessMessage: '',
          postError: '',
      }
  }

  postFriend = (friend) => {
    axios.post('http://localhost:5000/friends', friend)
    .then((res) => {
      console.log (res)
      this.setState({
        friends: [...this.state.friends, friend]
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
        console.log(this.state.friends)
    })
    .catch((err) => {
        // console.log(err)
        this.setState({error: err.response.message });
    })
  }


  render() {
    return(
      <div className="app-wrapper">
        <FriendForm postFriend={this.postFriend} />
        <Friends friends={this.state.friends} />
      </div>
    )
  }
}
export default App;
