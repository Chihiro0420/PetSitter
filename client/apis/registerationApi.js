import request from 'superagent'
import { dispatch, getState } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { setUser } from '../actions/user'
import { showError } from '../actions/error'

export const UPDATE_USER = 'UPDATE_USER'

export function updateUserAccount (user) {
  return {
    type: UPDATE_USER,
    user
  }
}

const rootUrl = '/api/v1/users'

export default function addUser (user, authUser, navigate) {
  const state = getState()
  const { token } = state.user

  const newUser = {
    name: user.name,
    location: user.location,
    description: user.description,
    email: authUser.email,
    auth0Id: authUser.sub,
    token
  }

  dispatch(setWaiting())
  return request
    .post(rootUrl)
    .set('authorization', `Bearer ${token}`)
    .set({ Accept: 'application/json' })
    .send(newUser)
    .then(() => {
      dispatch(setUser(newUser))
      newUser.token = token
      navigate('/myaccount')
      return newUser
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function getUser (authId, token) {
  dispatch(setWaiting())
  if (token) {
    return request
      .get(rootUrl)
      .set('authorization', `Bearer ${token}`)
      .set({ Accept: 'application/json' })
      .then(res => {
        const currentUser = res.body.users.filter(user => {
          if (authId === user.auth0Id) {
            return user
          }
        })
        return currentUser
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
      .finally(() => {
        dispatch(clearWaiting())
      })
  }
}

// working on🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨

export function updateUser (authId, token) {
  dispatch(setWaiting())
  if (token) {
    return request
      .post(rootUrl)
      .set('authorization', `Bearer ${token}`)
      .set({ Accept: 'application/json' })
      .then(res => res)
      .catch((err) => {
        dispatch(showError(err.message))
      })
      .finally(() => {
        dispatch(clearWaiting())
      })
  }
}
