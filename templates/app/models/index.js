'use strict';

const { Image } = require('./image');
const { DetectTask } = require('./detect-task');
const { DetectResult } = require('./detect-result');
const { FeatureTask } = require('./feature-task');
const { FeatureResult } = require('./feature-result');
const { PropTask } = require('./prop-task');
const { PropResult } = require('./prop-result');
const { Face } = require('./face');
const { FaceSet } = require('./face-set');

module.exports = {
  Image,
  DetectTask,
  DetectResult,
  FeatureTask,
  FeatureResult,
  PropTask,
  PropResult,
  Face,
  FaceSet
};
