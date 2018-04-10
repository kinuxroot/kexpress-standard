'use strict';

const kexpress = require('kexpress');
const Action = kexpress.core.action.Action;

const { Image, DetectResult, DetectTask } = require('../models');
const rpcRequest = require('../services/rpc').request;

const prehandlers = require('./face.pspec');

const actionDetectFace = Action.Create({
  name: 'detect-face',
  summary: '检测人脸',
  description: '该接口用于人脸静态检测，用户传递需要检测的图片，该接口以同步形式返回结果',
  prehandlers: prehandlers.actionDetectFace,
  services: {
    rpcRequest
  },
  async handler(req, res, ctx) {
    const config = ctx.app.config;
    const {
      imageDao, detectResultDao, detectTaskDao
    } = ctx.store.default;
    const logger = ctx.app.loggers.info;

    logger.info('Begin to detect face');
    const imageData = req.body.imageData;
    const image = new Image({
      data: imageData,
      createdAt: new Date()
    });
    await imageDao.create(image);

    const detectTask = new DetectTask({
      image: image,
      status: DetectTask.Status.Processing,
      createdAt: new Date()
    });
    await detectTaskDao.create(detectTask);
    logger.info(`Created task: ${detectTask.id}`);

    const rpcResult = await ctx.services.rpcRequest(
      config.rpc.procedures.VerifyDetectFace, {
        imageData: imageData
      },
      detectTask.id
    );

    const detectResults = [];
    for ( const result of rpcResult.results ) {
      const detectResult = new DetectResult(result);
      detectResult.createdAt = new Date();
      await detectResultDao.create(detectResult);

      detectResults.push(detectResult);
    }
    logger.info(`Received task result: ${rpcResult.task}`);

    if ( rpcResult.error ) {
      detectTask.error = {
        id: 1,
        message: 'text'
      };
    }
    detectTask.results = detectResults;
    await detectTaskDao.updateOne(detectTask);

    const resData = await detectTask.$extract({
      includes: {
        results: {
          rect: true,
          landmarks: true,
          roll: true,
          yaw: true,
          pitch: true,
          cropImage: true
        }
      }
    });

    const resJson = {
      data: resData
    };

    if ( detectTask.error ) {
      resJson.error = detectTask.error;
    }

    res.json(resJson);
  }
});

module.exports = {
  actionDetectFace
};
