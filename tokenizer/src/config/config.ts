import type { Config } from './config.interface';

export default (): Config => ({
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT),
  app: {
    name: process.env.APP_NAME,
    frontendUrl: process.env.APP_FRONTEND_URL,
    adminUrl: process.env.APP_ADMIN_URL,
  },
  api: {
    key: process.env.API_KEY,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: `${process.env.APP_NAME} Swagger`,
    description: `${process.env.APP_NAME} Swagger definitions`,
    version: '1.0',
    path: 'api',
  },
  graphql: {
    playgroundEnabled: process.env.GRAPHQL_PLAYGROUND === 'true',
    debug: process.env.GRAPHQL_DEBUG === 'true',
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: String(process.env.JWT_EXPIRES_IN),
    refreshIn: String(process.env.JWT_REFRESH_IN),
    accessSecret: String(process.env.JWT_ACCESS_SECRET),
    refreshSecret: String(process.env.JWT_REFRESH_SECRET),
    bcryptSaltOrRound: 10,
  },
  email: {
    sendgridApiKey: process.env.EMAIL_SENDGRID_API_KEY,
    contact: process.env.EMAIL_CONTACT,
    noReply: process.env.EMAIL_NO_REPLY,
  },
  redis: {
    url: process.env.REDIS_URL,
  },
  static: {
    url: process.env.STATIC_URL,
    path: process.env.STATIC_PATH,
    route: process.env.STATIC_ROUTE,
  },
  cache: {
    ttl: parseInt(process.env.CACHE_TTL),
  },
  log: {
    level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info',
  },
});
