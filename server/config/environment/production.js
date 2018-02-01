module.exports = {
    mongo: {
      uri:    process.env.MONGOLAB_URI ||
              process.env.MONGOHQ_URL ||
              process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
              'mongodb://localhost/MEAN_starter'
    }
  };