import React, { useContext, useRef } from 'react'
import DataContext from './Context/DataContext'

const NewPost = () => {
  const {handleSubmit,postBody,postTitle,setPostTitle,setPostBody,handleEdit}=useContext(DataContext)
// const reff=useRef()
  return (
    <main>
    <h1>NewPost</h1>
    <form onSubmit={handleSubmit} className='newPostForm'>
      <label>title</label>
      <input
      id='postTitle'
      type='text'
      // ref={reff}
      value={postTitle}
      onChange={(e)=>setPostTitle(e.target.value)}
      required

      />
      <label>Post:</label>
      <textarea
      id='postBody'
        value={postBody}
        rows='4'
          cols='40'
          style={{ width: '100%',padding:'3px',outline:'none', height: '100px' }}

        onChange={(e)=>setPostBody(e.target.value)}
        required
      />
      <button type='submit'> submit</button>
    </form>
    </main>
    
  )
}

export default NewPost