import Link from 'next/link'
import { Comment, CommentDiv, DeleteIcon, FontAwesomeDlt, Image, Name, Span, Time, User } from '../../styles/components/QuestionComments'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useUser } from '../../hooks/useUser'
import { useQuestion } from '../../hooks/useQuestion'
import useTimeAgo from '../../hooks/useTimeAgo'

export function CommentCard ({ DeleteComment, ...comment }) {
  const { name } = useUser()
  const { userPost } = useQuestion()
  const { createdAt } = comment
  const date = new Date(createdAt)
  const time = useTimeAgo(+date)
  console.log(userPost)

  return (
    <CommentDiv key={comment._id}>
      <User>
        <Link href={`/user/${comment.user}`}>
          <Image src={comment.profileImage} alt="" />
        </Link>
        <Name>{comment.user}</Name>
      </User>
      <Comment>{comment.comment}</Comment>
      <Span>
        <Time>{time}</Time>
        { (comment.user === name || name === userPost) && // Revisar names
          <DeleteIcon>
            <FontAwesomeDlt icon={faTrash} onClick={() => DeleteComment(comment._id)} />
          </DeleteIcon>
        }
      </Span>
    </CommentDiv>
  )
}
