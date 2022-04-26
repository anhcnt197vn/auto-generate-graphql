import type * as Types from '../type.interface';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateStudentMutationVariables = Types.Exact<{
  createStudentInput: Types.CreateStudentInput;
}>;


export type CreateStudentMutationResponse = (
  { __typename?: 'Mutation' }
  & { createStudent: (
    { __typename?: 'Student' }
    & Pick<Types.Student, 'firstName' | 'id' | 'lastName'>
  ) }
);


export const CreateStudentDocument = gql`
    mutation createStudent($createStudentInput: CreateStudentInput!) {
  createStudent(createStudentInput: $createStudentInput) {
    firstName
    id
    lastName
  }
}
    `;
export function useCreateStudentMutation(baseOptions?: Apollo.MutationHookOptions<CreateStudentMutationResponse, CreateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStudentMutationResponse, CreateStudentMutationVariables>(CreateStudentDocument, options);
      }
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutationResponse>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<CreateStudentMutationResponse, CreateStudentMutationVariables>;