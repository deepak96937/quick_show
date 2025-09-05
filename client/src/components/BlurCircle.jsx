import React from 'react'

const BlurCircle = ({ top, left, right, bottom }) => {
  return (
    <div
      className="absolute -z-50 h-56 w-56 aspect-square rounded-full bg-primary/30 blur-3xl"
      style={{
        ...(top !== undefined ? { top } : {}),
        ...(left !== undefined ? { left } : {}),
        ...(right !== undefined ? { right } : {}),
        ...(bottom !== undefined ? { bottom } : {}),
      }}
    />
  )
}

export default BlurCircle
