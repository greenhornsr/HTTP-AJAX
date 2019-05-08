import React from 'react';

const FriendForm = (props) => {
    return (
        <div className="form-wrapper">
            <h1>Add a New Friend</h1>
            <form action="">
                <label htmlFor="name">Name: </label>
                <input onChange={props.handleChanges} type="text" name="name" />
                <label htmlFor="age">Age: </label>
                <input onChange={props.handleChanges} type="text" name="age" />
                <label htmlFor="email">Email: </label>
                <input onChange={props.handleChanges} type="text" name="email" />
                <button>Add a Friend</button>
            </form>
        </div>
    )
}

export default FriendForm