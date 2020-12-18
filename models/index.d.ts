import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

export declare class Pet {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly nickname?: string;
  constructor(init: ModelInit<Pet>);
  static copyOf(source: Pet, mutator: (draft: MutableModel<Pet>) => MutableModel<Pet> | void): Pet;
}

export declare class Pact {
  readonly id: string;
  readonly type: string;
  readonly recordTitle: string;
  readonly role?: string;
  readonly initBy?: string;
  readonly contributor?: string;
  readonly status?: boolean;
  constructor(init: ModelInit<Pact>);
  static copyOf(source: Pact, mutator: (draft: MutableModel<Pact>) => MutableModel<Pact> | void): Pact;
}