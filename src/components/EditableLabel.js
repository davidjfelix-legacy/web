import {Label, TextField} from 'office-ui-fabric-react'
import React from 'react'


export const EditableLabel = (
  {
    canEdit = true,
    label,
    onChange,
    toggleIsEditable,
    value,
  }) => (
  <div>
    {(canEdit ) ?
      <TextField label={label} value={value}/> :
      <Label>{`${label}: ${value}`}</Label>
    }
  </div>
)

export default EditableLabel
