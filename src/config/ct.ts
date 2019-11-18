export default {
    api:  process.env.REACT_APP_CT_API || 'https://api.sphere.io',
    auth: {
        host: process.env.REACT_APP_CT_AUTH_HOST || 'https://auth.sphere.io',
        projectKey: process.env.REACT_APP_CT_AUTH_PROJECT_KEY || '',
        credentials: {
            clientId: process.env.REACT_APP_CT_AUTH_CREDENTIALS_CLIENT_ID || '',
            clientSecret: process.env.REACT_APP_CT_AUTH_CREDENTIALS_CLIENT_SECRET || '',
        },
        scopes: (process.env.REACT_APP_CT_AUTH_SCOPES && process.env.REACT_APP_CT_AUTH_SCOPES.split('|')) || [],
    }
};
