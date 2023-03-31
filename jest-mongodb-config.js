module.exports = {
  mongodbMemoryServer: {
    version: 'latest',
  },
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest',
    },
    binary: {
      version: '5.1.0',
      skipMD5: true,
    },
    autoStart: false,
  },
};
