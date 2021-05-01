import * as fs from "fs";
import * as path from "path";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";

import { resolvers } from "./src/resolvers";
import logger from "./src/logger";

const typeDefs = fs
  .readFileSync(path.join(__dirname, "schema.graphql"), "utf-8")
  .toString();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [logger],
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
