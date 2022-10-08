import React, { useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import { getPost } from '../../services/posts'
import { ContainerPost, UserPost, Image, ImageCnt, Name, H3, Time } from '../../styles/components/Post'
import { Buttons } from '../../components/Posts/Buttons'
import { CommentContainer } from '../../components/Posts/CommentContainer'
import useTimeAgo from '../../hooks/useTimeAgo'
import { redirectIfNotAuth } from '../../services/user'

export default function Post ({ post }) {
  const { createdAt } = post.post
  const time = new Date(createdAt)
  const postTime = useTimeAgo(+time)

  useEffect(() => {
    redirectIfNotAuth()
  }, [])

  return (
    <>
      <Navigation />
      <ContainerPost>
        <UserPost>
          <Link href={`/user/${post.post.user}`}>
            <ImageCnt>
              <Image src={post.post.profileImage} atl="" />
              <Name>{post.post.user}</Name>
            </ImageCnt>
          </Link>
          <H3>{post.post.description}</H3>
        </UserPost>
        <Time>{postTime}</Time>
        <Buttons post={post.post} />
        <CommentContainer post={post} />
      </ContainerPost>
    </>
  )
}

Post.getInitialProps = async (ctx) => {
  const { post } = ctx.query
  let userPost

  try {
    const res = await getPost(post)
    userPost = res.data
  } catch (error) {
    throw new Error('Error al obtener post')
  }
  return { post: userPost }
}
