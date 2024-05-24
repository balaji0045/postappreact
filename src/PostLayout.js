import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <div>
    <li><Link to={"/postpage/1"}>Post 1</Link></li>
    <li><Link to={"/postpage/2"}>Post 2</Link></li>
    <li><Link to={"/postpage/3"}>Post 3</Link></li>
    <li><Link to={"/postpage/newPost"}>New Post</Link></li>
    <Outlet />
    </div>
  )
}

export default PostLayout