import React from 'react'
import { faThumbsUp, faEye } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { ViewIcon, Container, Description, DivIcon, DivContainer, FontAwesome, Img, ImgCtn, LikeIcon, Name, Post } from '../../styles/components/AllPosts'
import { usePost } from '../../hooks/usePost'

export function UsersPosts () {
  const { posts, newLike } = usePost()

  return (
    <Container>
        {
          posts && posts.reverse().map(post => (
          <DivContainer key={post._id} >
              <Link href={`/post/${post._id}`} >
              <Post>
                <ImgCtn>
                  <Img src={post.profileImage} alt="" />
                  <Name>{post.user}</Name>
                </ImgCtn>
                <Description>{post.description}</Description>
              </Post>
              </Link>
              <DivIcon>
              <LikeIcon onClick={() => newLike(post._id)}>
                <FontAwesome icon={faThumbsUp} /> {post.likes}
              </LikeIcon>
              <ViewIcon>
                <FontAwesome icon={faEye} /> {post.views}
              </ViewIcon>
              </DivIcon>
          </DivContainer>
          ))}
    </Container>
  )
}
