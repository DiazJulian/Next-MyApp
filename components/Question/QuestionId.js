import { useQuestion } from '../../hooks/useQuestion'
import useTimeAgo from '../../hooks/useTimeAgo'
import { Container, H1, Time } from '../../styles/components/QuestionId'
import { QuestionCommentCnt } from './QuestionCommentCtn'

export function QuestionId ({ post }) {
  const { allQuestions } = useQuestion()
  const { createdAt } = post.question
  const time = new Date(createdAt)
  const questionTime = useTimeAgo(+time)

  return (
    <Container>
      <H1>{post.question.question}</H1>
      <Time>{questionTime}</Time>
      {console.log(allQuestions)}
      {console.log(questionTime)}
      <QuestionCommentCnt post={post} />
    </Container>
  )
}
