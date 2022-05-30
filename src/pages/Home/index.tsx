import React from 'react'
import { HeaderFilter } from '../../components/organisms/HeaderFilter'
import { UsersList } from '../../components/templates/UsersList'

export function Home() {
  return (
    <>
      <HeaderFilter />
      <UsersList />
    </>
  )
}
