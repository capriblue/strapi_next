module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd26cc76982762c0491d00db1d85d205'),
  },
});
