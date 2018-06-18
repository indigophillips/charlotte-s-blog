import React from 'react'

const Header = props => {
  return (
    <div className="header">
      <h1><a href={'' + props.link}>{props.title}</a></h1>
    </div>
  )
}
export default Header
