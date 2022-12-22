import React from 'react'
import { NavLink } from 'react-router-dom'

const RoundLink = ({link, icon}) => {
  return (
    <NavLink to={link} className="round-link"><i className={"round-link__icon " + icon} ></i></NavLink>
  )
}

export default RoundLink