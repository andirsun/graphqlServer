import { makeExecutableSchema } from "graphql-tools"; //tool to create a schema
import { resolvers } from "./resolvers.js"
const typeDefs = `
    type Query{
        hello: String
    }


`; // types of data that i can consult to my api

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers:resolvers
});


