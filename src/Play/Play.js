import React from 'react';
import { PickEmotion } from '../PickEmotion/PickEmotion';
import { ImageCapture } from '../ImageCapture/ImageCapture';
import { EmotionResults } from '../EmotionResults/EmotionResults';

export const Play = () => {

  return (
    <article className='play'>
      <PickEmotion />
      <ImageCapture />
      <EmotionResults />
    </article>
  )

}
