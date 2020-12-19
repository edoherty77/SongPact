// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Pact } = initSchema(schema);

export {
  User,
  Pact
};