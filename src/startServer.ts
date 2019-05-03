import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { createConnection } from 'typeorm'
import resolvers from './resolvers'
import typeDefs from './schema'
import { User } from './entity/User'

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      db: User
    }
  })
  try {
    await createConnection()
    const { url } = await server.listen()
    console.log(`Server running at ${url}`)
  } catch (e) {
    console.log(e)
  }
}

export default startServer
