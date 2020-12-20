import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly _id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly artistName: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Pact {
  readonly id: string;
  readonly type: string;
  readonly recordTitle: string;
  readonly role?: string;
  readonly initBy?: string;
  readonly status?: boolean;
  constructor(init: ModelInit<Pact>);
  static copyOf(source: Pact, mutator: (draft: MutableModel<Pact>) => MutableModel<Pact> | void): Pact;
}