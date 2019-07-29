const {ROUTES_PREFIX} = require('./constants');
module.exports = {
  port: process.env.MS_PORT || 3000,

  mongo: {
    url: process.env.MONGO_URL,
  },

  routes: {
    prefix: ROUTES_PREFIX,
  },

};