import React from 'react'
import {compose, withHandlers, withState} from 'recompose'


const enhance = compose(
  withState('text', 'updateText', ({initialText}) => initialText),
  withHandlers(
    {
      onTextChange: props => event => {
        props.updateText(event.target.value)
        props.onChange()
      }
    })
)


export const TextField = ({text, placeholder, onTextChange}) => (
  <input
    id='text'
    onChange={onTextChange}
    placeholder={placeholder}
    type='text'
    value={text}
  />
)

export default enhance(TextField)