import React from 'react'
import Navigation from '../../components/Navigation'
import { MyPosts } from '../../components/Posts/MyPosts'
import { Profile } from '../../components/Profile'
import { getUser } from '../../services/user'

export default function User ({ user }) {
  return (
    <>
      <Navigation page={user.user.name} />
      <Profile user={user} />
      <MyPosts user={user.user}/>
    </>
  )
}

User.getInitialProps = async (ctx) => {
  const name = ctx.query.name
  let user = {}
  try {
    const res = await getUser(name)
    user = res
  } catch (error) {
  }

  return { user }
}
