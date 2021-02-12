import React from 'react'

export default ({ post }) => {
  return (
    <div className="card my-2">
      <div className="card-body p-2">
        <h5 className="card-title">{post.title}</h5>
      </div>
    </div>
  )
}
