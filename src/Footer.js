import React from 'react'

const Footer = () => {
  const today =new Date()
  return (
    <footer>

    <h1>Footer</h1>
    <p>copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer