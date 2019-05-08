import React from 'react';
import Friend from './Friend'

const Friends = (props) => {
    // console.log("My PROPS = " + props)

    return(
        <div className="friend-wrapper">
            <h1>MY FRIENDS</h1>
            {props.friends.map(friend => {
            return  <Friend friend={friend} key={friend.id} />
            })}       
        </div>
    )
}

export default Friends