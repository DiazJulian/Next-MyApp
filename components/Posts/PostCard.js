import { useEffect, useState } from 'react'
import Link from 'next/link'
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Description, DivContainer, DivIcon, FontAwesome, Img, ImgCtn, LikeIcon, Name, Post, Time, CommentIcon, Number } from '../../styles/components/AllPosts'
import useTimeAgo from '../../hooks/useTimeAgo'
import { getPost } from '../../services/posts'
import { useButton } from '../../hooks/useButton'

export function PostCard ({ post }) {
  const { createdAt, _id } = post
  const timestamp = new Date(createdAt)
  const postTime = useTimeAgo(+timestamp)
  const [comments, setComments] = useState([])
  const { likes, liked, NewLike } = useButton(post)

  useEffect(() => {
    const getPostComment = async () => {
      const res = await getPost(_id)
      if (res) {
        setComments(res.data.comment.length)
      }
    }
    getPostComment()
  }, [_id])

  const handleLike = () => {
    NewLike(_id)
  }

  return (
    <DivContainer>
      <Link href={`/post/${post._id}`} >
      <Post>
        <ImgCtn>
          <Link href={`/user/${post.user}`}>
            <Img src={post.profileImage} alt="" />
          </Link>
          <Link href={`/user/${post.user}`}>
            <Name>{post.user}</Name>
          </Link>
          <Time>{postTime}</Time>
        </ImgCtn>
        <Description>{post.description}</Description>
      </Post>
      </Link>
      <DivIcon>
        <LikeIcon disabled={liked} onClick={handleLike}>
          <FontAwesome icon={faThumbsUp} /> <Number>{likes}</Number>
        </LikeIcon>
        <Link href={`/post/${post._id}`} >
          <CommentIcon>
            <FontAwesome icon={faComment} /> <Number>{comments}</Number>
          </CommentIcon>
        </Link>
      </DivIcon>
    </DivContainer>
  )
}
