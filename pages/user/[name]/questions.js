import Link from 'next/link'
import Navigation from '../../../components/Navigation'
import { Questions } from '../../../components/Question/Questions'
import { Profile } from '../../../components/Profile'
import { getUser } from '../../../services/user'
import { H3, Section } from '../../../styles/components/MyPosts'

export default function questions ({ user }) {
  const { name, role } = user.user
  return (
    <>
      <Navigation page={name} role={role} />
      <Profile user={user} role={role} />
      { (role !== 'Disable') &&
        <Section>
          <Link href={`/user/${name}`} >
            <H3>Publicaciones</H3>
          </Link>
          <Link href={`/user/${name}/questions`} >
            <H3>Preguntas</H3>
          </Link>
        </Section>
      }
      <Questions user={name} />
    </>
  )
}

questions.getInitialProps = async (ctx) => {
  const { name } = ctx.query
  let user = {}
  try {
    const res = await getUser(name)
    user = res
  } catch (error) {
    throw new Error(error.message)
  }

  return { user }
}
