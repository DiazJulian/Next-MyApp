import Link from 'next/link'
import Navigation from '../../components/Navigation'
import { MyPosts } from '../../components/Posts/MyPosts'
import { Profile } from '../../components/Profile'
import { getUser } from '../../services/user'
import { H3, Section } from '../../styles/components/MyPosts'

export default function User ({ user }) {
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
      <MyPosts user={user.user} role={role}/>
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
    throw new Error(error.message)
  }

  return { user }
}
