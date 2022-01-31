import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLUnionType,
} from "graphql";
import { User } from "../../../../models/User";
import { ProjectType } from "./Project";
import { UserType } from "./User";
import { WorkspaceType } from "./Workspace";

const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    userData: { type: UserType },
    workspaceData: { type: WorkspaceType },
    projectData: { type: ProjectType },
  }),
});

export { UserType, MessageType };
