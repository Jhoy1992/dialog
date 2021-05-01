export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Friend = {
  __typename?: 'Friend';
  _id: Scalars['String'];
  index: Scalars['Int'];
  picture: Scalars['String'];
  age: Scalars['String'];
  eyeColor: Scalars['String'];
  name: Scalars['String'];
  company: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
};

export type Person = {
  __typename?: 'Person';
  _id: Scalars['String'];
  index: Scalars['Int'];
  picture: Scalars['String'];
  age: Scalars['String'];
  eyeColor: Scalars['String'];
  name: Scalars['String'];
  company: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  friends?: Maybe<Array<Maybe<Friend>>>;
};

export type Query = {
  __typename?: 'Query';
  list?: Maybe<Array<Maybe<Person>>>;
};


export type QueryListArgs = {
  name?: Maybe<Scalars['String']>;
};
