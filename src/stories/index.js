import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Provider } from 'react-redux';

import configureStore from '../store'
import VideoStream from '../components/VideoStream'

const store = configureStore()

storiesOf('VideoStream', module)
  .add("Default VideoStream", () => (
    <Provider store={store} >
      <VideoStream video={{url:""}} dispatch={()=>{}}/>
    </Provider>
  ))
  .add("4:3 Small VideoStream", () => (
    <Provider store={store} >
      <VideoStream video={{url:""}} aspectRatio={4/3} scaleWidth={720} />
    </Provider>
  ))