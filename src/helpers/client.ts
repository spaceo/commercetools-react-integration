import ctConfig from "../config/ct";
import { createHttpLink } from "apollo-link-http";
import {ApolloLink} from "apollo-link";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';

const createClient = async () => {
    const sdkAuth = new SdkAuth(ctConfig.auth);
    const tokenProvider = new TokenProvider({
        sdkAuth,
        fetchTokenInfo: sdkAuth => sdkAuth.anonymousFlow(),
        onTokenInfoChanged: tokenInfo => console.log(tokenInfo),
    }, null);

    const tokenInfo = await tokenProvider.getTokenInfo();
    const httpLink = createHttpLink({ uri: `${ctConfig.api}/${ctConfig.auth.projectKey}/graphql` });
    const middlewareLink = new ApolloLink((operation, forward) => {
        operation.setContext({
            headers: {
                authorization: `${tokenInfo.token_type} ${tokenInfo.access_token}`
            }
        });
        return forward(operation);
    });

    return new ApolloClient({
        link: middlewareLink.concat(httpLink),
        cache: new InMemoryCache()
    });
};

export default createClient;
