import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'

import storage from '../storage'
import database from '../database'

const mapStateToProps = ({auth}) => ({auth})

const enhance = compose(
  connect(mapStateToProps),
  withState('file', 'updateFile', ''),
  withHandlers({
    onFileChange: props => event => {
      props.updateFile(event.target.value)
    },
    onNewVideoSubmit: props => event => {
      event.preventDefault()
      const rawVideosRef = database.ref(`raw-videos/${props.auth.user.uid}`)
      const rawVideoRef = rawVideosRef.push()
      rawVideoRef.set({'is_processed': false})
      storage.ref()
        .child(`raw-videos/${props.auth.user.uid}/${rawVideoRef.key}`)
        .put(event.target.elements.file.files[0])
    },
  })
)

const NewRawVideoView = ({file, onFileChange, onNewVideoSubmit}) => (
  <div>
    <form id='upload-video' onSubmit={onNewVideoSubmit} />
    <input
      form='upload-video'
      id='file'
      type='file'
      value={file}
      onChange={onFileChange}/>
    <input
      form='upload-video'
      type='submit'
      value='Upload' />
  </div>
)

export default enhance(NewRawVideoView)