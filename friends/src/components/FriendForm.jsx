import React from 'react';

const FriendForm = props => {
    console.log(props)
        return (
            <div className="form-wrapper">
                <h1>Add a New Friend</h1>
                <form onSubmit={props.postFriend}>
                    <label htmlFor="name">Name: </label>
                    {/* <input onChange={props.handleChanges} type="text" value={props.friend.name} name="name" placeholder={`\uD83D\uDD0E`} /> */}
                    <input onChange={props.handleChanges} type="text" value={props.friend.name} name="name" />
                    <label htmlFor="age">Age: </label>
                    {/* <input onChange={props.handleChanges} type="number" value={props.friend.age} name="age" placeholder={`\uD83D\uDD0E`} /> */}
                    <input onChange={props.handleChanges} type="number" value={props.friend.age} name="age" />
                    <label htmlFor="email">Email: </label>
                    {/* <input onChange={props.handleChanges} type="text" value={props.friend.email} name="email" placeholder={`\uD83D\uDD0E`} /> */}
                    <input onChange={props.handleChanges} type="text" value={props.friend.email} name="email" />
                    <button className="addF-Button" type="submit">Add a Friend</button>
                    <div className="textarea-div">
                        <p>{props.message}</p>
                    </div>
                </form>
            </div>
        )
    }


export default FriendForm