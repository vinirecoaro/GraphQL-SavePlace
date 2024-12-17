import { ApolloServer, gql } from "apollo-server";

const localizations = [
    {
      id: "1",
      name: "Central Park",
      latitude: "40.785091",
      longitude: "-73.968285",
      pinColor: "blue",
    },
    {
      id: "2",
      name: "Eiffel Tower",
      latitude: "48.858844",
      longitude: "2.294351",
      pinColor: "red",
    },
    {
      id: "3",
      name: "Great Wall of China",
      latitude: "40.431908",
      longitude: "116.570374",
      pinColor: "green",
    },
    {
      id: "4",
      name: "Sydney Opera House",
      latitude: "-33.856784",
      longitude: "151.215297",
      pinColor: "yellow",
    },
    {
      id: "5",
      name: "Christ the Redeemer",
      latitude: "-22.951916",
      longitude: "-43.210487",
      pinColor: "purple",
    },
  ];

const typeDefs = gql`
    type Query{
        welcome: String
        localizations: [Localization]
        localization(id: String): Localization
    }

    type Localization{
        id: String
        name: String    
        latitude: String
        longitude: String
        pinColor: String
    }
`

const resolvers = {
    Query: {
        welcome: () => {
            return "Olá"
        },
        localizations: () => {
            return localizations
        },
        localization: (_, args) => {
          const id = args.id
          return localizations.filter(loc => loc.id == id)[0]
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen().then((serverInfo)=>{
    console.log(`Serviço em execução: ${serverInfo.url}`)
})