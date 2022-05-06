import React from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import { faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { getPost } from '../../services/posts'
import { usePost } from '../../hooks/usePost';
import { Container, DeleteIcon, FontAwesome, Image, ImageCnt, LikeIcon } from '../../styles/components/Post';


export default function Post ({post}) {

  const { deletePost } = usePost()
  console.log(post);

  const handleDelete = () => {
    deletePost(post.post._id)
  }
  return(
    <>
      <Navigation />
      <Container>
        <Link href={`/user/${post.post.user}`}>
          <ImageCnt>
            <Image src={post.post.profileImage} atl="" />
            <h2>{post.post.user}</h2>
          </ImageCnt>
        </Link>
        <p>{post.post.description}</p>
        {/* <p>{post.comment[0].comment}</p> */}
        <LikeIcon>
          <FontAwesome icon={faThumbsUp} /> {post.post.likes}
        </LikeIcon>
        <DeleteIcon onClick={handleDelete}>
          <FontAwesome icon={faTrash} />
        </DeleteIcon>
      </Container>
    </>
  )
}

Post.getInitialProps = async (ctx) => {
  
  const { post } = ctx.query

  const res = await getPost(post)
  console.log(res)
  
  return { post: res }
}