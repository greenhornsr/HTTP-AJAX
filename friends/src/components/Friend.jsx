import React from 'react'

const Friend = (props) => {
    // console.log(props.friend);

    const deleteFriend = (event) => {
        event.preventDefault();
        props.deleteFriend(props.friend.id)
    }

    const updateFriend = (event) => {
        // console.log(props)
        event.preventDefault();
        props.updateFriend(props.friend)
    }

    return( 
        <div className="each-friend">
            <div className="friend-button-div">
                <button onClick={updateFriend} className="update-friend">{` \u270C `}</button>
                <button onClick={deleteFriend} className="delete-friend" type="button">{`\uD83D\uDDD1`}</button>
            </div>
            <div className="friend-display" onClick={updateFriend} >
                <h2>{props.friend.name}</h2>
                <h3>{props.friend.age}</h3>
                <h3>{props.friend.email}</h3>
            </div>
        </div>
    )
}

export default Friend