module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'index.js',
      cwd: '/home/tasit/MpMatik/api',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production' ,
		PORT: 3004
      },
    },
  ],
};
