const fs = require('fs');

const { join } = require('path');

const MMS = require('mongodb-memory-server-global');

const cwd = process.cwd();

const globalConfigPath = join(cwd, 'globalConfig.json');

// eslint-disable-next-line
const { MongoMemoryServer, MongoMemoryReplSet } = MMS;

const mongod = new MongoMemoryServer({
  binary: {
    // version: '4.0.3',
    skipMD5: true,
  },
  // debug: true,
  autoStart: false,
});

module.exports = async () => {
  if (!mongod.isRunning) {
    await mongod.start();
  }

  const mongoConfig = {
    mongoUri: await mongod.getUri(),
  };

  // save mongo uri to be reused in each test
  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));

  global.__MONGOD__ = mongod;
};
