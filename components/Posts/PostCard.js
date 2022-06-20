import { useEffect, useState } from 'react'
import Link from 'next/link'
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Description, DivContainer, DivIcon, FontAwesome, Img, ImgCtn, LikeIcon, Name, Post, Time, CommentIcon } from '../../styles/components/AllPosts'
import useTimeAgo from '../../hooks/useTimeAgo'
import { getPost } from '../../services/posts'

export function PostCard ({ post }) {
  const { createdAt, _id } = post
  const timestamp = new Date(createdAt)
  const postTime = useTimeAgo(+timestamp)
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getPostComment = async () => {
      const res = await getPost(_id)
      if (res) {
        setComments(res.data.comment.length)
      }
    }
    getPostComment()
  }, [_id])
  return (
    <DivContainer key={post._id} >
      <Link href={`/post/${post._id}`} >
      <Post>
        <ImgCtn>
          <Img src={post.profileImage} alt="" />
          <Name>{post.user}</Name>
          <Time>{postTime}</Time>
        </ImgCtn>
        <Description>{post.description}</Description>
      </Post>
      </Link>
      <DivIcon>
        <LikeIcon>
          <FontAwesome icon={faThumbsUp} /> {post.likes}
        </LikeIcon>
        <CommentIcon>
          <FontAwesome icon={faComment} /> {comments}
        </CommentIcon>
      </DivIcon>
    </DivContainer>
  )
}
