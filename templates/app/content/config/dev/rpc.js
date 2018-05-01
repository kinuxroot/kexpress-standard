'use strict';

module.exports = {
  type: 'ampq',
  uri: 'amqp://guest:guest@localhost',
  procedures: {
    VerifyDetectFace: 'verify.face.detect',
    VerifyExtractProp: 'verify.prop.extract',
    VerifyExtractFeature: 'verify.feature.extract'
  }
};
