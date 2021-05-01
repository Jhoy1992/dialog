import { QueryListArgs } from "./graphql-types";

const users = require("../database/db.json");

export const resolvers = {
  Query: {
    list: (_, { name = "" }: QueryListArgs) => {
      const [first = "", second = ""] = name.split(" ");
      const regex = new RegExp(`\\b${first}[\\w+\\s]+${second}\\b`, "gi");
      const items = users.filter(({ name }) => name.match(regex));

      return items;
    },
  },
};
