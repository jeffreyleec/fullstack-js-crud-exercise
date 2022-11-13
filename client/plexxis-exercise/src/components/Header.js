import React from 'react'
import "./styles/header.css"

export const Header = (props) => {
  return (
    <div className="title">
    <h1>{props.title}<span>{props.subTitle}</span></h1>
    
  </div>
  )
}
