import { Questions } from '../../../components/Question/Questions'
import Navigation from '../../../components/Navigation'
import { Profile } from '../../../components/Profile'
import { getUser } from '../../../services/user'

export default function questions ({ user }) {
  return (
    <>
      <Navigation />
      <Profile user={user} />
      <Questions user={user.user.name} />
    </>
  )
}

questions.getInitialProps = async (ctx) => {
  const name = ctx.query.name
  let user = {}
  try {
    const res = await getUser(name)
    user = res
  } catch (error) {
  }

  return { user }
}
