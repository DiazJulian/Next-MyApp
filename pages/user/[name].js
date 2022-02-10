import React from 'react'
import { getUser } from '../../services/user';
import { DivContainer, Profile } from '../../styles/Users';

export default function User ({user}) {
  console.log(user);
  return(
    <DivContainer>
      <Profile src={user.user.profileImage} alt="" />
      <h1>{user.user.name}</h1>
    </DivContainer>
  )
}

User.getInitialProps = async (ctx) => {
  const name = ctx.query.name
  console.log(name);
  let user = {}
  try{
    const res = await getUser(name)
    user = res
  }catch(error) {
    console.log(error);
  }

  return {user: user}
}