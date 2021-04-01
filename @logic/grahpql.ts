import { GraphQLClient } from "graphql-request"

export const client = new GraphQLClient('https://api.hashnode.com', { headers: { "Authorization": "https://api.hashnode.com/" } })
