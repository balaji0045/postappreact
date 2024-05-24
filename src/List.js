import React from 'react'
// import ListItems from './ListItems'

const List = ({items}) => {
  return (
<ul>
  {items.map(item=>(
   
     <li key={item.id}>
      {JSON.stringify(item)}
      {console.log(item)}
     </li>

  ))}

</ul>
  )
}

export default List