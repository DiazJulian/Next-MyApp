import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getUserPost } from '../../services/posts'
import { Card, Container, Description, Name } from '../../styles/components/MyPosts'

export function MyPosts ({ user }) {
  const [posts, setPosts] = useState()
  const { name } = user

  useEffect(() => {
    const UserPosts = async () => {
      const res = await getUserPost(name)
      setPosts(res)
    }
    UserPosts()
  }, [name])

  return (
    <>
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
