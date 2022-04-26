import type * as Types from '../type.interface';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type StudentQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type StudentQueryResponse = (
  { __typename?: 'Query' }
  & { student: (
    { __typename?: 'Student' }
    & Pick<Types.Student, 'firstName' | 'id' | 'lastName'>
  ) }
);


export const StudentDocument = gql`
    query student($id: String!) {
  student(id: $id) {
    firstName
    id
    lastName
  }
}
    `;
export function useStudentQuery(baseOptions: Apollo.QueryHookOptions<StudentQueryResponse, StudentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentQueryResponse, StudentQueryVariables>(StudentDocument, options);
      }
export function useStudentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentQueryResponse, StudentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentQueryResponse, StudentQueryVariables>(StudentDocument, options);
        }
export type StudentQueryHookResult = ReturnType<typeof useStudentQuery>;
export type StudentLazyQueryHookResult = ReturnType<typeof useStudentLazyQuery>;
export type StudentQueryResult = Apollo.QueryResult<StudentQueryResponse, StudentQueryVariables>;