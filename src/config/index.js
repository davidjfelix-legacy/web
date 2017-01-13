if (process.env.NODE_ENV === 'production') {
  module.exports = require('./index.production')
} else if (process.env.NODE_ENV === 'staging') {
  module.exports = require('./index.staging')
} else if (process.env.NODE_ENV === 'development') {
  module.exports = require('./index.development')
} else {
  module.exports = require('./index.local')
}