import {branch, lifecycle, renderComponent} from 'recompose'
import {push, replace} from 'react-router-redux'

import database from '../database'
import {updateAuth} from "../actions/auth";

export const ensureAuthenticated = (redirectUrl) => (
  lifecycle({
    componentWillMount() {
      if (this.props.auth.user === null) {
        this.props.dispatch(push({
          pathname: '/auth/login',
          search: redirectUrl ? `?redirect=${encodeURIComponent(redirectUrl)}` : ''
        }))
      }
    },
  })
)

export const ensureNotAuthenticated = (auth) => (
  lifecycle({
    componentWillMount() {
      this.unsubscribeAuth = auth.onAuthStateChanged((user) => {
        this.props.dispatch(updateAuth({user}))
        if (this.props.auth.user !== null) {
          this.props.dispatch(replace(this.props.redirectUrl ? this.props.redirectUrl : '/'))
        }
      })
    },

    componentWillUnmount() {
      this.unsubscribeAuth()
    },
  })
)

export const withDatabaseSubscribe = (trigger, getRefPath, getOnTrigger) => (
  lifecycle({
    componentWillMount() {
      this.databaseRef = database.ref(getRefPath(this.props))
      this.onTrigger = this.databaseRef.on(
        trigger,
        getOnTrigger(this.props)
      )
    },
    componentWillUnmount() {
      this.databaseRef.off(trigger, this.onTrigger)
    },
  })
)

export const withLoading = (isLoading, LoadingComponent) => (
  branch(
    isLoading,
    renderComponent(LoadingComponent)
  )
)

export const withNotFound = (isNotFound, NotFoundComponent) => (
  branch(
    isNotFound,
    renderComponent(NotFoundComponent)
  )
)