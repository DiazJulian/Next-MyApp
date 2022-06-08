import React from 'react'
import Navigation from '../../components/Navigation'
import { getUser } from '../../services/user'
import { DivContainer, Profile } from '../../styles/Users'

export default function User ({ user }) {
  return (
    <>
    <Navigation page={user.user.name} />
    <DivContainer>
      <Profile src={user.user.profileImage} alt="" />
      <h1>{user.user.name}</h1>
    </DivContainer>
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
