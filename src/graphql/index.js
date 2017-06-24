// @flow

import graphqlHTTP from 'express-graphql'
import { GraphQLSchema } from 'graphql'

import * as trenitalia from '../lib/trenitalia'
import query from './query'
import formatError from './format-error'


const context = { trenitalia }

export type Ctx = typeof context

const schema = new GraphQLSchema({
  query
})


export default graphqlHTTP({
  schema,
  graphiql: true,
  context,
  formatError,
})