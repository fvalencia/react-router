export default {

  path: '/',
  children: [
    require('./home').default,
    require('./admin').default,
    require('./error').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();
    return route;
  },

};
