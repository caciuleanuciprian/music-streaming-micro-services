declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string | undefined;
    SUPABASE_KEY: string;
    SUPABASE_URL: string;
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
  }
}
