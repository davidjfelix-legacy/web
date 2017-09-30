import database from '../database'

export const actionTypes = {
  ADD_MEMBER_TO_GROUP: 'ADD_MEMBER_TO_GROUP',
  ADD_ROLE_TO_GROUP: 'ADD_ROLE_TO_GROUP',
  CREATE_GROUP: 'CREATE_GROUP',
  UPDATE_GROUP: 'UPDATE_GROUP',
}

export const addMemberToGroup = ({groupId, memberId}) => {
  const groupRef = database.ref(`groups/${groupId}`)
  const memberRef = database.ref(`users/${memberId}`)
  groupRef.child(`members/${memberId}`).set(true)
  memberRef.child(`groups/${groupId}`).set(true)
  return {
    type: actionTypes.ADD_MEMBER_TO_GROUP,
    groupId,
    memberId,
  }
}

export const addRoleToGroup = ({groupId, roleName}) => {
  const groupRef = database.ref(`groups/${groupId}`)
  const roleRef = groupRef.child('roles').push()
  roleRef.set({
    role_name: roleName
  })
  return {
    type: actionTypes.ADD_ROLE_TO_GROUP,
    groupId,
    roleName,
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
