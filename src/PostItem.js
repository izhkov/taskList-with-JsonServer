import React from 'react'

export const PostItem = ({ id, title, completed }) => {
  return (
    <div className="postItem">
      <div>{title}</div>
    </div>
  )
}
