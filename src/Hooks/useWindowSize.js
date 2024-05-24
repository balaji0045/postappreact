import React from 'react'
import { useState ,useEffect} from 'react'

const useWindowSize = () => {
const [windowSize,setWindowSie]=useState({
    width:undefined,
    height:undefined
  })


  useEffect(()=>{
  const  handleReSize=()=>{
     setWindowSie({
        width:window.innerWidth,
        height:window.innerHeight
      })
    }
    handleReSize()
    window.addEventListener('resize',handleReSize)
    return ()=>window.removeEventListener('resize',handleReSize)
  },[])

  return  windowSize
}

export default useWindowSize