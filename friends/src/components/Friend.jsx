import React from 'react'

const Friend = (props) => {
    // console.log(props.friend);

    const deleteFriend = (event) => {
        event.preventDefault();
        props.deleteFriend(props.friend.id)
    }

    return( 
        <div className="each-friend">
            <button onClick={deleteFriend} className="delete-friend" type="button">X</button>
            <h2>{props.friend.name}</h2>
            <h3>{props.friend.age}</h3>
            <h3>{props.friend.email}</h3>
        </div>
    )
}

export default Friend