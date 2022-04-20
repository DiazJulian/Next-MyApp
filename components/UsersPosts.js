import React, {useEffect, useState} from 'react'
import { getPosts } from '../services/posts'
import { Container, Description, Img, ImgCtn, Name, Post } from '../styles/components/posts'

export function UsersPosts () {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const allPosts = async () => {
      const res = await getPosts()
      setPosts(res)
      console.log(res);
    }
    allPosts()
    console.log(posts);
  },[])
  return(
    <Container>
        {posts && posts.map(post => (
          <Post key={post._id}>
            <ImgCtn>
              <Img src={post.profileImage} alt="" />
              <Name>{post.user}</Name>
            </ImgCtn>
            <Description>{post.description}</Description>
          </Post>
        ))}
    </Container>
  )
}