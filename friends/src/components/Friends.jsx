import React from 'react';
import Friend from './Friend'

const Friends = (props) => {
    // console.log("My PROPS = " + props)

    return(
        <div className="friend-wrapper">
            <h1>MY FRIENDS</h1>
            <p>**From this screen, if you add information to the above input fields and then click a user OR {` \u270C `} button below, you can update friends with the corresponding input fields content.**</p>
            {props.friends.map(friend => {
                // console.log("my FRIEND: " + friend.id)
            return  <Friend friend={friend} key={friend.id} deleteFriend={props.deleteFriend} updateFriend={props.updateFriend} />
            })}       
        </div>
    )
}

export default Friends