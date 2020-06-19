import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_HUMANS = gql`
  {
    humans {
      id
      email
    }
  }
`

const Users = () => {
  const { loading, error, data } = useQuery(GET_HUMANS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return data.humans.map((user) => <span key={user.id}>{user.email}</span>)
}
export default Users
