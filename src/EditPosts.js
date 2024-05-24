import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './Context/DataContext';

const EditPosts = () => {
  const {setEditBody,setEditTitle,posts,handleEdit,editTitle,editBody}=useContext(DataContext)
  const {id}=useParams();
  const post =posts.find(post=>(post.id).toString()=== id);
  useEffect(()=>{
    if(post){
      setEditTitle(post.title)
      setEditBody(post.body)

    }
  },[post,setEditBody,setEditTitle])
  return (
    <main className='NewPost'>
  {editTitle && 
 <>
<h2>Edit Post</h2>
<form onSubmit={(e)=>e.preventDefault()} className='NewPostForm'>
  <label>Title:</label>
  <input 
  id='postTitle'
    value={editTitle}
    onChange={(e)=>{setEditTitle(e.target.value)}}
  />
  <label>Body:</label>
  <input
    type='text'
    value={editBody}
    onChange={(e)=>{setEditBody(e.target.value)}}
  />
    <button type='submit' onClick={()=> handleEdit(post.id)} id='editbutton'>Update</button>
</form>

  </>
  }
  {
    !editTitle && <>
      <h2>Page Not Found</h2>
      <h3>visit Out Home Page...</h3>
    </>
  }

    </main>
  )
}

export default EditPosts