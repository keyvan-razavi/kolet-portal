module.exports = {
  // Database configuration
  database: process.env.DATABASE_URL,

  // Authentication providers
  providers: [
    // Google authentication provider
    {
      id: "google",
      type: "oauth2",
      client: {
        domain: "yourdomain.com",
        redirectUri: "/api/auth/google/callback",
      },
      credentials: {
        token: {
          prompt: ["email", "password"],
        },
      },
    },
  ],

  // Password hashing algorithm
  secret: process.env.SECRET,

  // Other settings (optional)
  callbacks: {
    jwt: async ({ token, user }) => {
      if (!user) return null;
      token.userId = user.id;
      return token;
    },
  },
};
