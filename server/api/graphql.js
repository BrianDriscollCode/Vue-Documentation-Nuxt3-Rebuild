import { GraphQLList } from "graphql";
import {
    GraphQLBoolean,
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
} from "graphql";

import { createYoga } from "graphql-yoga";
import postgres from "postgres";


export default defineEventHandler(async (event) => {  // eslint-disable-line

    const db = postgres({
        host: process.env.SUPAHOST,
        port: 5432,
        user: process.env.SUPAUSER,
        password: process.env.SUPAPASSWORD,
        database: process.env.SUPANAME
    });

    const user_data = await db`SELECT * FROM user_accounts`;

    const UserType = new GraphQLObjectType({
        name: "User",
        description: "This represents a user",
        fields: () => ({
            id: {type: new GraphQLNonNull(GraphQLString)},
            first_name: {type: new GraphQLNonNull(GraphQLString)},
            email: {type: new GraphQLNonNull(GraphQLString)},
            account_type: {type: new GraphQLNonNull(GraphQLString)},
            created_at: {type: new GraphQLNonNull(GraphQLString)},
        })
    });

    const schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: "Query",
            fields: {
                user: {
                    type: new GraphQLList(UserType),
                    resolve: () => user_data
                },
                ping: {
                    type: GraphQLBoolean,
                    resolve: () => true,
                },
            }
        })
    });

    const yoga = createYoga({ schema, graphqlEndpoint: "/api/graphql" });
    const { req, res } = event.node;
    return yoga(req, res);
});