import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export declare class Pact {
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly contributors?: string;
  readonly createdAt: string;
  readonly id: string;
  readonly initBy?: string;
  readonly perfPublish?: number;
  readonly prodAdvance?: number;
  readonly prodCredit?: string;
  readonly prodPublish?: number;
  readonly prodRoyalty?: number;
  readonly recordTitle: string;
  readonly role?: string;
  readonly status?: boolean;
  readonly type: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Pact>);
}

export declare class User {
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly address: string;
  readonly artistName: string;
  readonly city: string;
  readonly companyName: string;
  readonly contacts?: (User | null)[];
  readonly createdAt: string;
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly lastName: string;
  readonly pacts?: (Pact | null)[];
  readonly state: string;
  readonly updatedAt: string;
  readonly zipCode: number;
  constructor(init: ModelInit<User>);
}

export declare class ModelPactConnection {
  readonly items?: (Pact | null)[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelPactConnection>);
}

export declare class ModelUserConnection {
  readonly items?: (User | null)[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelUserConnection>);
}

