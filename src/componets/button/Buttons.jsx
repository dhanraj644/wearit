import React from 'react'

export const Buttons = (props) => {
  return (
    <button className='btn ' style={{'backgroundColor':props.backgroundcolor ,'color':props.color}}> {props.name}</button>

  )
}
