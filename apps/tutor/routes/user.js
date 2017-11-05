const kexpress = require('kexpress');
const Router = kexpress.core.router.Router;
const router = new Router();
const actions = require('../actions/user');

router.post('/login', actions.actionLogin);
router.get('/:userId', actions.actionGetUser);
router.put('/', actions.actionCreateUser);

module.exports = {
  router: router
};
