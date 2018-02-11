import {branch, renderComponent} from 'recompose'


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