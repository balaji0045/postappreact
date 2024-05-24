import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className='post'>
    <Link to={`post/${post.id}`}>
    <h2 className='postTitle'>{post.title}</h2>
    <p className='postDate'>{post.datetime}</p>
    </Link>
      
  <p>{
      (post.body).length <= 40 ? post.body :
      `${(post.body).slice(0,40)}...`
    }
    </p>
    </article>
  )
}

export default Post