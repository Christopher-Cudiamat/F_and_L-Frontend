import React from 'react'

const Overlay = ({color}: {color: string}) => {
  return (
    <div className={`absolute inset-0 ${color}`}/>
  )
}

export default Overlay;