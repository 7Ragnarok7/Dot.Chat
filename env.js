const env = {
    dev: {
      serverHost: 'localhost',
      serverPort: 3000,
      dbHost: 'localhost',
      dbPort: 5432,
      dbUser: 'postgres',
      dbPass: '1234',
      dbName: 'dotchat'
    },
    prod: {
      serverHost: 'localhost',
      serverPort: 80,
      dbHost: 'localhost',
      dbPort: 5432,
      dbUser: 'postgres',
      dbPass: '1234',
      dbName: 'dotchat'
    }
  };
  
  module.exports = env.dev;