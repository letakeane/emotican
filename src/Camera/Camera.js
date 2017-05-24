import React from 'react';

export const Camera = (props) => {
  return (
    <div className="camera">
      <video id="video"></video>
      <a id="startButton"
        onClick={ props.handleStartClick }
      >Take photo</a>
  </div>
  )
}
