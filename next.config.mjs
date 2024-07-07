const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/todo-list/' : '',
  basePath: isProd ? '/todo-list' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
