import React from 'react'
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { CommentIcon, Container, Description, DivIcon, DivContainer, FontAwesome, Img, ImgCtn, LikeIcon, Name, Post } from '../../styles/components/AllPosts'
import { usePost } from '../../hooks/usePost'

export function UsersPosts () {
  
  const { posts } = usePost()
  
  return(
    <Container>
        {posts && posts.reverse().map(post => (
          <DivContainer>
              <Link href={`/post/${post._id}`}  key={post._id} >
              <Post>
                <ImgCtn>
                  <Img src={post.profileImage} alt="" />
                  <Name>{post.user}</Name>
                </ImgCtn>
                <Description>{post.description}</Description>
              </Post>
              </Link>
              <DivIcon>
              <LikeIcon>
                <FontAwesome icon={faThumbsUp} /> {post.likes}
              </LikeIcon>
              <CommentIcon>
                <FontAwesome icon={faComment} /> {post.likes}
              </CommentIcon>
              </DivIcon>
          </DivContainer>
        ))}
    </Container>
  )
}