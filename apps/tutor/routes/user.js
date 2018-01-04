const kexpress = require('kexpress');
const Router = kexpress.core.router.Router;
const actions = require('../actions/user');

const router = new Router({
  name: 'user',
  description: '用户操作'
});
router.post('/login', actions.actionLogin);
router.get('/:userId', actions.actionGetUser);
router.put('/', actions.actionCreateUser);

module.exports = {
  router: router
};
