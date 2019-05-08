import React from 'react';

class FriendForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            friend: {
                name: "",
                age: "",
                email: "",
            }
        }
    }

    handleChanges = event => {
        // console.log(event.target.value)
        this.setState({
            friend:{
            ...this.state.friend, [event.target.name]: event.target.value, 
            }     
        })
    }

    postFriend = event => {
        event.preventDefault();
        this.props.postFriend(this.state.friend)
    };

    render(){
        return (
            <div className="form-wrapper">
                <h1>Add a New Friend</h1>
                <form onSubmit={this.postFriend}>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.handleChanges} type="text" name="name" />
                    <label htmlFor="age">Age: </label>
                    <input onChange={this.handleChanges} type="text" name="age" />
                    <label htmlFor="email">Email: </label>
                    <input onChange={this.handleChanges} type="text" name="email" />
                    <button type='submit'>Add a Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendForm