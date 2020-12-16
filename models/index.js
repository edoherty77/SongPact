// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Pet } = initSchema(schema);

export {
  Todo,
  Pet
};