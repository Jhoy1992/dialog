import { ApolloServerPlugin } from "apollo-server-plugin-base";
import { GraphQLRequestContext } from "apollo-server-types";
import { GraphQLRequestListener } from "apollo-server-plugin-base/src/index";

import * as fs from "fs";
import * as path from "path";

const accessLogStream = fs.createWriteStream(
  path.join(path.resolve(__dirname, "..", "access.log")),
  { flags: "a" }
);

const logger: ApolloServerPlugin = {
  requestDidStart<TContext>({
    request,
  }: GraphQLRequestContext<TContext>): GraphQLRequestListener<TContext> {
    const { query, variables, operationName, http } = request;

    if (http?.headers.has("x-apollo-tracing")) {
      return;
    }

    const queryParsed = query?.replace(/\s+/g, " ").trim();
    const variablesParsed = JSON.stringify(variables);

    const requestLog = `${new Date().toISOString()} - [Request Started] { query: ${queryParsed}, variables: ${variablesParsed}, operationName: ${operationName} }\n`;

    accessLogStream.write(requestLog);

    return;
  },
};

export default logger;
