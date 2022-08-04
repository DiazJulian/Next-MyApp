import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getUserPost } from '../../services/posts'
import { Card, Container, Description, H3, Name, Section } from '../../styles/components/MyPosts'

export function MyPosts ({ user }) {
  const [posts, setPosts] = useState()

  useEffect(() => {
    const UserPosts = async () => {
      const res = await getUserPost(user.name)
      setPosts(res)
    }
    console.log(user)
    console.log(posts)
    UserPosts()
  }, [])

  return (
    <>
    <Section>
      <Link href={`/user/${user.name}`} >
        <H3>Publicaciones</H3>
      </Link>
      <Link href={`/user/${user.name}/questions`} >
        <H3>Preguntas</H3>
      </Link>
    </Section>
    <Container>
      { posts && posts.map(post => (
        <Link href={`/post/${post._id}`} key={post._id} >
          <Card>
            <Name>{post.user}</Name>
            <Description>{post.description}</Description>
          </Card>
        </Link>
      ))}
    </Container>
    </>
  )
}
