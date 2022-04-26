import type * as Types from '../type.interface';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateLessonMutationVariables = Types.Exact<{
  createLessonInput: Types.CreateLessonInput;
}>;


export type CreateLessonMutationResponse = (
  { __typename?: 'Mutation' }
  & { createLesson: (
    { __typename?: 'Lesson' }
    & Pick<Types.Lesson, 'endDate' | 'id' | 'name' | 'startDate'>
    & { students: Array<(
      { __typename?: 'Student' }
      & Pick<Types.Student, 'firstName' | 'id' | 'lastName'>
    )> }
  ) }
);


export const CreateLessonDocument = gql`
    mutation createLesson($createLessonInput: CreateLessonInput!) {
  createLesson(createLessonInput: $createLessonInput) {
    endDate
    id
    name
    startDate
    students {
      firstName
      id
      lastName
    }
  }
}
    `;
export function useCreateLessonMutation(baseOptions?: Apollo.MutationHookOptions<CreateLessonMutationResponse, CreateLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLessonMutationResponse, CreateLessonMutationVariables>(CreateLessonDocument, options);
      }
export type CreateLessonMutationHookResult = ReturnType<typeof useCreateLessonMutation>;
export type CreateLessonMutationResult = Apollo.MutationResult<CreateLessonMutationResponse>;
export type CreateLessonMutationOptions = Apollo.BaseMutationOptions<CreateLessonMutationResponse, CreateLessonMutationVariables>;