import { ApolloServer} from "apollo-server";
import typeDefs from "./src/schemas.js";
import localizations from "./src/database.js";
import Query from "./src/resolvers/query.js";
import Mutation from "./src/resolvers/mutation.js";

const resolvers = {
    Query,
    Mutation
}

const context = {
  localizations
}

const server = new ApolloServer({typeDefs, resolvers, context})
server.listen().then((serverInfo)=>{
    console.log(`Serviço em execução: ${serverInfo.url}`)
})