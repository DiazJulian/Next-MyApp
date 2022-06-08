import React from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import { getPost } from '../../services/posts'
import { ContainerPost, UserPost, Image, ImageCnt, Name, H3 } from '../../styles/components/Post'
import { Buttons } from '../../components/Posts/Buttons'
import { CommentContainer } from '../../components/Posts/CommentContainer'

export default function Post ({ post }) {
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
        <Buttons post={post} />
        <CommentContainer post={post} />
      </ContainerPost>
    </>
  )
}

Post.getInitialProps = async (ctx) => {
  const { post } = ctx.query

  const res = await getPost(post)
  console.log(res)
  return { post: res.data }
}
