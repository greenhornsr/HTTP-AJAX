import React from 'react';
import Friend from './Friend'

const Friends = (props) => {
    // console.log("My PROPS = " + props)

    return(
        <div className="friend-wrapper">
            <h1>MY FRIENDS</h1>
            <p>**FYI...if you add information to the inputs and then click a user OR {` \u270C `} button below, it will update the friend with the input fields content.**</p>
            {props.friends.map(friend => {
                // console.log("my FRIEND: " + friend.id)
            return  <Friend friend={friend} key={friend.id} deleteFriend={props.deleteFriend} updateFriend={props.updateFriend} />
            })}       
        </div>
    )
}

export default Friends