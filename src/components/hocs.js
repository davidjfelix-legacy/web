import { branch, lifecycle, renderComponent } from 'recompose'

import auth from '../auth'
import database from '../database'

export const withDatabaseSubscribe = (trigger, getRefPath, getOnTrigger) => (
  lifecycle({
    componentWillMount() {
      super.componentWillMount()
      this.databaseRef = database.ref(getRefPath(this.props))
      this.onTrigger = this.databaseRef.on(
        trigger,
        getOnTrigger(this.props)
      )
    },
    componentWillUnmount() {
      super.componentWillUnmount()
      this.databaseRef.off(trigger, this.onTrigger)
    },
  })
)

export const withAuthSubscribe = (onAuthStateChanged) => (
  lifecycle({
    componentWillMount() {
      super.componentWillMount()
      this.unsubscribeAuth = auth.onAuthStateChanged((user) => (
        onAuthStateChanged(user, this.props)
      ))
    },

    componentWillUnmount() {
      super.componentWillUnmount()
      this.unsubscribeAuth()
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