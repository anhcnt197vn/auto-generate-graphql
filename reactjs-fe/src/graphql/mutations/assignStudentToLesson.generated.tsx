import type * as Types from '../type.interface';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AssignStudentToLessonMutationVariables = Types.Exact<{
  assignStudentInput: Types.AssignStudentInput;
}>;


export type AssignStudentToLessonMutationResponse = (
  { __typename?: 'Mutation' }
  & { assignStudentToLesson: (
    { __typename?: 'Lesson' }
    & Pick<Types.Lesson, 'endDate' | 'id' | 'name' | 'startDate'>
    & { students: Array<(
      { __typename?: 'Student' }
      & Pick<Types.Student, 'firstName' | 'id' | 'lastName'>
    )> }
  ) }
);


export const AssignStudentToLessonDocument = gql`
    mutation assignStudentToLesson($assignStudentInput: AssignStudentInput!) {
  assignStudentToLesson(assignStudentInput: $assignStudentInput) {
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
export function useAssignStudentToLessonMutation(baseOptions?: Apollo.MutationHookOptions<AssignStudentToLessonMutationResponse, AssignStudentToLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AssignStudentToLessonMutationResponse, AssignStudentToLessonMutationVariables>(AssignStudentToLessonDocument, options);
      }
export type AssignStudentToLessonMutationHookResult = ReturnType<typeof useAssignStudentToLessonMutation>;
export type AssignStudentToLessonMutationResult = Apollo.MutationResult<AssignStudentToLessonMutationResponse>;
export type AssignStudentToLessonMutationOptions = Apollo.BaseMutationOptions<AssignStudentToLessonMutationResponse, AssignStudentToLessonMutationVariables>;