import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './Context/DataContext'
const Nav = () => {
  const {search,setSearch}=useContext(DataContext)
  return (
    <nav className='Nav'>
<form onSubmit={(e)=>e.preventDefault()} className='searchForm'>
  <label htmlFor='search'>Search items</label>
  <input
    placeholder='searchitems'
    
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
  />
  <ul>
    <li><Link to={'/'}>HOME</Link></li>
    <li><Link to={"/post"}>Post</Link></li>
    <li><Link to={"/about"}>About</Link></li>
  </ul>
</form>
    </nav>
  )
}

export default Nav