import keyMirror from 'keymirror'

import database from '../database'

export const actionTypes = keyMirror({
  CREATE_OR_UPDATE_USER_PROFILE: null,
  UPDATE_USER: null,
})

export const createOrUpdateUserProfile = ({user, profile}) => {
  const userRef = database.ref(`users/${user.uid}`)
  userRef.update(profile)

  return {
    type: actionTypes.CREATE_OR_UPDATE_USER_PROFILE,
    user,
    profile,
  }
}

export const updateUser = ({userId, userSnapshot}) => ({
  type: actionTypes.UPDATE_USER,
  userId,
  userSnapshot,
})