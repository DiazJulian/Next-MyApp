import { useQuestion } from '../../hooks/useQuestion'
import useTimeAgo from '../../hooks/useTimeAgo'
import { Container, DeleteIcon, DivIcon, FontAwesome, H1, Time } from '../../styles/components/QuestionId'
import { QuestionCommentCnt } from './QuestionCommentCtn'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { DeleteQuestionService } from '../../services/question'
import { useUser } from '../../hooks/useUser'

export function QuestionId ({ post }) {
  const { allQuestions } = useQuestion()
  const { createdAt } = post.question
  const time = new Date(createdAt)
  const questionTime = useTimeAgo(+time)
  const { name } = useUser()

  const handleDeleteQuestion = () => {
    const { _id, user } = post.question
    DeleteQuestionService(_id, user)
  }

  return (
    <Container>
      <H1>{post.question.question}</H1>
      <DivIcon>
        <Time>{questionTime}</Time>
        { (name === post.question.user) &&
        <DeleteIcon onClick={handleDeleteQuestion}>
          <FontAwesome icon={faTrash} />
        </DeleteIcon>
        }
      </DivIcon>
      {console.log(allQuestions)}
      {console.log(questionTime)}
      <QuestionCommentCnt post={post} />
    </Container>
  )
}
