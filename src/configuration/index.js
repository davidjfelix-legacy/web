if (process.env.ENV === 'development') {
  module.exports = require('./index.development')
} else if (process.env.ENV === 'staging') {
  module.exports = require('./index.staging')
} else if (process.env.ENV === 'production') {
  module.exports = require('./index.production')
} else {
  module.exports = require('./index.local')
}