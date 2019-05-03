import { ResolverMap } from './types/MapResolver'

const resolver: ResolverMap = {
  Query: {
    users: async (_, __, { db }) => db.find(),
    user: async (_, { id }, { db }) => {
      try {
        const user = await db.findByPk(id)
        return user
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  Mutation: {
    createUser: async (_, { email, password }, { db }) => {
      const hashedPassword = password
      const user = db.create({
        email,
        password: hashedPassword
      })
      try {
        await user.save()
        return user
      } catch (e) {
        throw new Error(e)
      }
    },
    updateUser: async (_, { email, password }, { db }) => {
      try {
        const user = await db.findOne({ email })
        user.password = password
        await user.save(user)
        return user
      } catch (e) {
        throw new Error(e)
      }
    },
    deleteUser: async (_, { id }, { db }) => {
      try {
        const user = await db.findOne({ id })
        await db.remove(user)
        return true
      } catch (_) {
        return false
      }
    }
  }
}

export default resolver
