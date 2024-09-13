import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

export async function initServer() {
  const app = express();

  app.use(express.json());

  const graphqlServer = new ApolloServer({
    typeDefs: `
    type Query{
    sayHello :String,
    addintV:
    }
    `,
    resolvers: {
      Query: {
        sayHello: () => `Hello  from graphql server`,
        addintV: () => 10,
      },
    },
  });

  await graphqlServer.start();

  app.use("/graphql", expressMiddleware(graphqlServer));

  return app;
}
