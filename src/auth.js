import * as _ from 'lodash'


class Auth {
  header = ''
  isAuthenticated = false

  constructor() {
    this.header = localStorage.getItem('authorizationHeader')
    this.isAuthenticated = !(_.isEmpty(this.header))
  }

  logOut() {
    this.isAuthenticated = false
    this.header = ''
    localStorage.removeItem('authorizationHeader')
  }

  setHeader(header) {
    this.header = header
    localStorage.setItem('authorizationHeader', header)
    this.isAuthenticated = header !== ''
  }

}

const auth = new Auth()
export default auth
