import keyMirror from 'keymirror'

import database from '../database'

export const actionTypes = keyMirror({
  CREATE_GROUP: null,
  UPDATE_GROUP: null,
})

export const createGroup = ({groupName, ownerId}) => {
  const groupList = database.ref('groups')
  const groupRef = groupList.push()
  groupRef.set({
    owner_id: ownerId,
    group_name: groupName,
  })
  return {
    type: actionTypes.CREATE_GROUP,
      groupName,
      ownerId,
  }
}

export const updateGroup = ({groupId, groupSnapshot}) => ({
  type: actionTypes.UPDATE_GROUP,
  groupId,
  groupSnapshot,
})
