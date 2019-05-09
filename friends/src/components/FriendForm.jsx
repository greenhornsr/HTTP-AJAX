import React from 'react';

class FriendForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            friend: {
                name: '',
                age: 0,
                email: '',
            }
        }
    }

    handleChanges = event => {
        // console.log(event.target.value)
        console.log(event.target)
        this.setState({
            friend: {...this.state.friend, [event.target.name]: event.target.value,}     
        })
    }

    postFriend = event => {
        event.preventDefault();
        this.props.postFriend(this.state.friend)
        // console.log(this.state.friend)
        this.setState({
            friend: {
                name: '',
                age: 0,
                email: '',
            }
        })
    };

    render(){
        return (
            <div className="form-wrapper">
                <h1>Add a New Friend</h1>
                <form onSubmit={this.postFriend}>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.handleChanges} type="text" value={this.state.friend.name} name="name" />
                    <label htmlFor="age">Age: </label>
                    <input onChange={this.handleChanges} type="number" value={this.state.friend.age} name="age" />
                    <label htmlFor="email">Email: </label>
                    <input onChange={this.handleChanges} type="text" value={this.state.friend.email} name="email" />
                    <button type='submit'>Add a Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendForm