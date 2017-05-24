import React, { Component } from 'react';

export default class ImageCapture extends Component {
  constructor(props) {
    super()
    this.state = {
      constraints: { audio: false, video: { width: 300, height: 350, facingMode: 'user' } }
    }
  }

  beginImageCapture() {
    navigator.mediaDevices.getUserMedia(this.state.constraints)
    .then((mediaStream) => {
      const video = document.querySelector('video');
      video.srcObject = mediaStream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    })
    .catch((error) => {
      console.log('Problem capturing image: ', error)
    });
  }

  endImageCapture() {
console.log('trying to stop video');
    const video = document.querySelector('video');
    video.pause();
  }

  takeSnapshot(video, ctx, canvas) {
    if (video) {
      ctx.drawImage(video, 350, 20, 600, 700, 0, 0, 300, 350);
      this.endImageCapture(video);
      canvas.toBlob((blob) => {
          let newImg = document.createElement('img'),
          url = URL.createObjectURL(blob);

          newImg.onload = () =>{
              URL.revokeObjectURL(url);
            };

            newImg.src = url;
            document.body.appendChild(newImg);
        })
        const faceURL = document.querySelector('img').src;
        console.log(faceURL);
      // this.props.analyzeEmotions(faceURL);
    }
  }

  captureImage() {
    const video = document.querySelector('video');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    this.takeSnapshot(video, ctx, canvas);
  }

  render() {
    return (
      <article className='image-capture'>
        <button onClick={() => this.beginImageCapture()}>Start video</button>
        <video autoPlay muted='true' height='350px' width='300px'></video>
        <div className='face-oval'></div>
        <button className='take-picture'
                onClick={() => this.captureImage()}>
          take picture
        </button>
        <canvas height='350px' width='300px'></canvas>
      </article>
    )
  }
}
