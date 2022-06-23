import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q028zp2n6q01xs9d4d26wj/master',
  cache: new InMemoryCache()
});