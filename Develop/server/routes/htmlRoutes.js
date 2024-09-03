const path = require('path');

module.expo
rts = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/index.html'))
  );
