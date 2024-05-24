import React from 'react'
import Feed from './Feed'
import DataContext from './Context/DataContext'
import { useContext } from 'react'
const Home = () => {
  const {searchResults,isLoading,fetchError}=useContext(DataContext)
  return (
    <main>
    {isLoading && <p>Loading Posts.....</p>}
    {isLoading  && fetchError && <p style={{color:'red'}}>{fetchError}</p>}
    {
      !isLoading && !fetchError &&
      (searchResults.length ? <Feed  posts={searchResults}/>:(<p style={{marginTop:'2rem'}}>no items to display</p>)
 )
    }
    
    </main>
  )
}   

export default Home