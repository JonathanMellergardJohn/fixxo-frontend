import React from 'react'
import { NavLink } from 'react-router-dom'

const Btn = ({btnColor, btnText}) => {
  return (
    <NavLink href="#" className={"btn " + btnColor}>{btnText}</NavLink>
  )
}

export default Btn