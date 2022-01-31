import { Dsl } from "../../../models/Dsl";
import { Metamodel } from "../../../models/Metamodel";
import { Model } from "../../../models/Model";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { Workspace } from "../../../models/Workspace";

const { Query } = require("./queries");
// const { Mutation } = require("./mutations");

export const resolvers = {
  Query,
  //   mutations,
  ReturnedData: {
    __resolveType(obj) {
      if (obj instanceof User) return "User";
      if (obj instanceof Workspace) return "Workspace";
      if (obj instanceof Project) return "Project";
      if (obj instanceof Metamodel) return "Metamodel";
      if (obj instanceof Model) return "Model";
      if (obj instanceof Dsl) return "Dsl";

      return null;
    },
  },
};
