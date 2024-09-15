const UsersHandler = require('./handler');
const routes = require('./api/user/routes');

module.exports = {
  name: 'users',
  register: async (server, { container }) => {
    const usersHandler = new UsersHandler(container);
    server.route(routes(usersHandler));
  },
};
