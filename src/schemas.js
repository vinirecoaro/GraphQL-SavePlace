import { gql } from "apollo-server";


const typeDefs = gql`
    type Query{
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

export default typeDefs