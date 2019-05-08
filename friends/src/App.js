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

  render() {
    return(
      <div>
        <FriendForm />
        <Friends friends={this.state.friends} />
      </div>
    )
  }
}
export default App;
