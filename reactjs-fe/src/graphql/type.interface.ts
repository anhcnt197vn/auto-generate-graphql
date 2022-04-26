export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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

export type AssignStudentInput = {
  lessonId: Scalars['ID'];
  studentIds: Array<Scalars['ID']>;
};

export type CreateLessonInput = {
  endDate: Scalars['String'];
  name: Scalars['String'];
  startDate: Scalars['String'];
  students?: InputMaybe<Array<Scalars['ID']>>;
};

export type CreateStudentInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Lesson = {
  __typename?: 'Lesson';
  endDate: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  startDate: Scalars['String'];
  students: Array<Student>;
};

export type Mutation = {
  __typename?: 'Mutation';
  assignStudentToLesson: Lesson;
  createLesson: Lesson;
  createStudent: Student;
};


export type MutationAssignStudentToLessonArgs = {
  assignStudentInput: AssignStudentInput;
};


export type MutationCreateLessonArgs = {
  createLessonInput: CreateLessonInput;
};


export type MutationCreateStudentArgs = {
  createStudentInput: CreateStudentInput;
};

export type Query = {
  __typename?: 'Query';
  lesson: Lesson;
  lessons: Array<Lesson>;
  student: Student;
  students: Array<Student>;
};


export type QueryLessonArgs = {
  id: Scalars['String'];
};


export type QueryStudentArgs = {
  id: Scalars['String'];
};

export type Student = {
  __typename?: 'Student';
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
};
