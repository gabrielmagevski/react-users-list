import React from 'react'
import { HeaderFilter } from '../../components/molecules/HeaderFilter'
import { UsersList } from '../../components/molecules/UsersList'

export function Home() {
  return (
    <>
      <HeaderFilter />
      <UsersList />
    </>
  )
}
