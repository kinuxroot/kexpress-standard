const kexpress = require('kexpress');
const Action = kexpress.core.action.Action;

const errors = require('../config/errors');

const models = require('../models');
const User = models.User;

const actionLogin = Action.Create({
  prehandlers: {
    request: {
      body: {
        type: 'object',
        required: true,
        properties: {
          loginName: {
            type: 'string',
            required: true
          },
          password: {
            type: 'string',
            required: true
          }
        }
      }
    },
    response: {
      200: {
        type: 'object',
        required: true,
        properties: {
          data: {
            type: 'object',
            required: true,
            properties: {
              loginName: 'string*',
              role: {
                type: 'object',
                required: true,
                properties: {
                  id: 'string*',
                  name: 'string*'
                }
              }
            }
          }
        }
      }
    },
    store: {
      default: {
        User
      }
    }
  },
  async handler(req, res, ctx) {
    res.json({
      message: 'hello'
    });
  }
});

const actionCreateUser = Action.Create({
  prehandlers: {
    request: {
      body: {
        type: 'object',
        required: true,
        properties: {
          loginName: 'string*',
          password: 'string*'
        }
      }
    },
    store: {
      default: {
        User
      }
    }
  },
  async handler(req, res, ctx) {
    const userDao = ctx.store.default.userDao;

    const user = new User({
      loginName: req.body.loginName,
      password: req.body.password
    });
    await userDao.create(user);

    const userData = await user.$extract({
      recursive: true
    });

    res.json({
      user: userData
    });
  }
});

const actionGetUser = Action.Create({
  prehandlers: {
    request: {
      params: {
        type: 'object',
        required: true,
        properties: {
          userId: 'string*'
        }
      }
    },
    store: {
      default: {
        User
      }
    }
  },
  async handler(req, res, ctx) {
    const userDao = ctx.store.default.userDao;

    const user = await userDao.findOne({
      id: req.params.userId
    });

    if ( !user ) {
      throw new errors.UserNotFound({
        content: `User ${req.params.userId} is not found`
      });
    }

    const userData = await user.$extract({
      recursive: true
    });

    res.json({
      user: userData
    });
  }
});

module.exports = {
  actionLogin,
  actionGetUser,
  actionCreateUser
};
