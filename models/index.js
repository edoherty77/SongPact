// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Pet, Pact } = initSchema(schema);

export {
  Todo,
  Pet,
  Pact
};