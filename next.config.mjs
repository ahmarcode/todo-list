const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/todo-list/' : '',
  basePath: isProd ? '/todo-list' : '',
  images: {
    unoptimized: true,
  },
};
