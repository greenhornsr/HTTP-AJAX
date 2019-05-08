import React from 'react';

const FriendForm = () => {
    return (
        <div>
            <h1>Add a New Friend</h1>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                <label htmlFor="age">Age</label>
                <input type="text" name="age" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
            </form>
        </div>
    )
}

export default FriendForm