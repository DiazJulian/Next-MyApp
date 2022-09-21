import Link from 'next/link'
import Navigation from '../../components/Navigation'
import { MyPosts } from '../../components/Posts/MyPosts'
import { Profile } from '../../components/Profile'
import { getUser } from '../../services/user'
import { H3, Section } from '../../styles/components/MyPosts'

export default function User ({ user }) {
  const { name } = user.user
  return (
    <>
      <Navigation page={name} />
      <Profile user={user} />
      <Section>
        <Link href={`/user/${name}`} >
          <H3>Publicaciones</H3>
        </Link>
        <Link href={`/user/${name}/questions`} >
          <H3>Preguntas</H3>
        </Link>
      </Section>
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
