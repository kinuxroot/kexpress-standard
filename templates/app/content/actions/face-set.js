'use strict';

const kexpress = require('kexpress');
const Action = kexpress.core.action.Action;

const errors = require('../config/errors');

const prehandlers = require('./{{moduleName}}.pspec');

const actionCreateFaceSet = Action.Create({
  name: 'CreateFaceSet',
  summary: '创建人脸库',
  description: '该接口用于创建人脸库，人脸库的名字不能重复',
  prehandlers: prehandlers.actionCreateFaceSet,
  async handler(req, res, ctx) {
    const {
      faceSetDao
    } = ctx.store.default;

    const existedFaceSet = await faceSetDao.findOne({
      name: req.body.name
    });

    if ( existedFaceSet ) {
      throw new errors.FaceSetExisted();
    }

    const faceSet = new FaceSet({
      name: req.body.name,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    faceSetDao.create(faceSet);
    const faceSetData = await faceSet.$extract({
      includes: {
        name: true,
        createdAt: true,
        updatedAt: true
      }
    });

    res.json({
      data: faceSetData
    });
  }
});

module.exports = {
  actionCreateFaceSet,
  actionGetFaceSets,
  actionDeleteFaceSet,
  actionAddFace,
  actionDeleteFace
};
