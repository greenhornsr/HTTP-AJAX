import React from 'react';
import Friend from './Friend'

const Friends = (props) => {
    console.log("My PROPS = " + props)
    
    return(
        <>
            {props.friends.map(friend => {
            return  <Friend friend={friend} key={friend.id} />
            })}       
        </>
    )
}

export default Friends