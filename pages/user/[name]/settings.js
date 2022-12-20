import { useEffect } from 'react'
import Navigation from '../../../components/Navigation'
import { Profile } from '../../../components/Profile'
import { SettingsForm } from '../../../components/Settings'
import { getUser, redirectIfNotAuth } from '../../../services/user'

export default function Settings ({ user }) {
  const { role } = user.user

  useEffect(() => {
    redirectIfNotAuth()
  })

  return (
    <>
      <Navigation page="settings" role={role} />
      <SettingsForm user={user} />
      <Profile user={user} role={role} />
    </>
  )
}

Settings.getInitialProps = async (ctx) => {
  const name = ctx.query.name
  let user = {}
  try {
    const res = await getUser(name)
    user = res
  } catch (error) {
    throw new Error(error.message)
  }

  return { user }
}
