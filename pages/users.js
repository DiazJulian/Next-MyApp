import React, { useState } from 'react'
import { getUsers } from '../services/user'
import { Img, P, UL } from '../styles/Users'
import { Input } from '../styles/Login'
import Link from 'next/link'

export default function Users ({ users }) {
  console.log(users)
  const [search, setSearch] = useState('')

  return (
    <div>
      <Input onChange={(e) => setSearch(e.target.value)} autoFocus placeholder="..." />
      {users && users.filter(user => {
        if (search === '') {
          return user
        }
        if (user.name.toLowerCase().includes(search.toLowerCase())) {
          return user
        }
      }).map(user => (
        <Link href={`/user/${user.name}`} key={user._id} >
          <UL>
            <Img src={user.profileImage} alt=""/>
            <P>{user.name}</P>
          </UL>
        </Link>
      ))}
    </div>
  )
}

Users.getInitialProps = async () => {
  let users = []
  try {
    const res = await getUsers()
    users = res
  } catch (error) {
    console.log(error)
  }

  return { users }
}
