import { ListContainer } from '../../styles/components/QuestionComments'
import { CommentCard } from './QCommentCard'

export function ListComments ({ comments, deleteCmt }) {
  return (
    <ListContainer>
      {
        comments && comments.map(comment => (
          <CommentCard key={comment._id} DeleteComment={deleteCmt} {...comment} />
        ))
      }
    </ListContainer>
  )
}
