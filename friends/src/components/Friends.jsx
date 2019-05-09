import React from 'react';
import Friend from './Friend'

const Friends = (props) => {
    // console.log("My PROPS = " + props)

    return(
        <div className="friend-wrapper">
            <h1>MY FRIENDS</h1>
            {props.friends.map(friend => {
                // console.log("my FRIEND: " + friend.id)
            return  <Friend friend={friend} key={friend.id} deleteFriend={props.deleteFriend} />
            })}       
        </div>
    )
}

export default Friends