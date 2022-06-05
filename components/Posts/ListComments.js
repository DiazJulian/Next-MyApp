import { ListContainer } from '../../styles/components/Comments'
import { CommentCard } from './CommentCard'

export function ListComments ({comments, deleteCmt}) {

  return(
    <ListContainer>
      {
        comments && comments.map(comment => (
          <CommentCard key={comment._id} DeleteComment={deleteCmt} {...comment} />
        ))
      }
    </ListContainer>
  )
}