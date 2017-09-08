import database from '../database'

export const actionTypes = {
  ADD_MEMBER_TO_GROUP: 'ADD_MEMBER_TO_GROUP',
  CREATE_GROUP: 'CREATE_GROUP',
  UPDATE_GROUP: 'UPDATE_GROUP',
}

export const addMemberToGroup = ({groupId, memberId}) => {
  const groupRef = database.ref(`groups/${groupId}`)
  const memberRef = database.ref(`users/${memberId}`)
  groupRef.child('members').set({
    [memberId]: true
  })
  memberRef.child('groups').set({
    [groupId]: true
  })
  return {
    type: actionTypes.ADD_MEMBER_TO_GROUP,
    groupId,
    memberId,
  }
}

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
