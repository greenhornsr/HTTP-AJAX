import React from 'react';

class FriendForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            friend: {
                name: '',
                age: '',
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
                age: '',
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
                    <input onChange={this.handleChanges} type="text" value={this.state.friend.name} name="name" placeholder={`\uD83D\uDD0E`} />
                    <label htmlFor="age">Age: </label>
                    <input onChange={this.handleChanges} type="number" value={this.state.friend.age} name="age" placeholder={`\uD83D\uDD0E`} />
                    <label htmlFor="email">Email: </label>
                    <input onChange={this.handleChanges} type="text" value={this.state.friend.email} name="email" placeholder={`\uD83D\uDD0E`} />
                    <button type='submit'>Add a Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendForm