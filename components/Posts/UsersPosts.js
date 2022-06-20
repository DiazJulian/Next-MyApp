import React from 'react'
import { usePost } from '../../hooks/usePost'
import { Container } from '../../styles/components/AllPosts'
import { PostCard } from './PostCard'

export function UsersPosts () {
  const { posts } = usePost()

  return (
    <Container>
        {
          posts && posts.reverse().map(post => (
          <PostCard key={post._id} post={post} />
          ))}
    </Container>
  )
}
