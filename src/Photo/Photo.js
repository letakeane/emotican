import React from 'react';

export const Photo = (props) => {
  return (
    <div className="output">
      <img id="photo" alt="Your photo"/>
      <a id="takePictureButton"
        onClick={ props.handleSaveClick }
      >take picture</a>
    </div>
  )
}
