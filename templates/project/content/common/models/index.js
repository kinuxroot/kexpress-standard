'use strict';

const path = require('path');
const fs = require('fs');
const basename = path.basename(__filename);

const models = Object.create(null);

fs.readdirSync(__dirname)
.filter(file => {
  return (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  );
})
.forEach(file => {
  const fileModels = require(path.join(__dirname, file));
  Object.assign(models, fileModels);
});

module.exports = models;
