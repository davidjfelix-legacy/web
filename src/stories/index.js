import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Provider } from 'react-redux';

import configureStore from '../store'
import VideoStream from '../components/VideoStream'

const store = configureStore()

storiesOf('VideoStream', module)
  .add("VideoStream", () => (
    <Provider store={store} >
      <VideoStream video={{url:""}} dispatch={()=>{}}/>
    </Provider>))
