export interface Config {
  env: string;
  port: number;
  app: AppConfig;
  api: ApiConfig;
  cors: CorsConfig;
  swagger: SwaggerConfig;
  graphql: GraphqlConfig;
  security: SecurityConfig;
  email: EmailConfig;
  redis: RedisConfig;
  static: StaticConfig;
  cache: CacheConfig;
  log: LogConfig;
}

export interface AppConfig {
  name: string;
  frontendUrl: string;
  adminUrl: string;
}

export interface ApiConfig {
  key: string;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  accessSecret: string;
  refreshSecret: string;
  bcryptSaltOrRound: string | number;
}

export interface EmailConfig {
  sendgridApiKey: string;
  contact: string;
  noReply: string;
}

export interface RedisConfig {
  url: string;
}

export interface StaticConfig {
  url: string;
  path: string;
  route: string;
}

export interface CacheConfig {
  ttl: number;
}

export interface LogConfig {
  level: string;
}
