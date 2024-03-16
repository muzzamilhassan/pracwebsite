import React from 'react'
import Navbar from '../navigation/Navbar'

const Header = (props) => {
  return (
    <section  className="Sub-header">
    <Navbar/>
    <h1>{props.title}</h1>
    </section>
  )
}

export default Header