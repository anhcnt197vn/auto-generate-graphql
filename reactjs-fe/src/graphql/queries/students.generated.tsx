import type * as Types from '../type.interface';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type StudentsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type StudentsQueryResponse = (
  { __typename?: 'Query' }
  & { students: Array<(
    { __typename?: 'Student' }
    & Pick<Types.Student, 'firstName' | 'id' | 'lastName'>
  )> }
);


export const StudentsDocument = gql`
    query students {
  students {
    firstName
    id
    lastName
  }
}
    `;
export function useStudentsQuery(baseOptions?: Apollo.QueryHookOptions<StudentsQueryResponse, StudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentsQueryResponse, StudentsQueryVariables>(StudentsDocument, options);
      }
export function useStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentsQueryResponse, StudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentsQueryResponse, StudentsQueryVariables>(StudentsDocument, options);
        }
export type StudentsQueryHookResult = ReturnType<typeof useStudentsQuery>;
export type StudentsLazyQueryHookResult = ReturnType<typeof useStudentsLazyQuery>;
export type StudentsQueryResult = Apollo.QueryResult<StudentsQueryResponse, StudentsQueryVariables>;