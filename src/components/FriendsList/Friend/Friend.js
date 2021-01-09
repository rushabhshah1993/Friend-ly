import React from 'react'

const Friend = props => {
    return (
        <div>
            <p>{props.friend.name}</p>
            <span>{props.friend.is_favorite}</span>
            <span>Delete</span>
        </div>
    )
}

export default Friend;
