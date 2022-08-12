import Navigation from '../../components/Navigation'
import { getQuestion } from '../../services/posts'

export default function QuestionId ({ post }) {
  return (
    <>
      <Navigation />
      <div>
        <h1>{post.question.question}</h1>
      {console.log(post)}
      </div>
    </>
  )
}

QuestionId.getInitialProps = async (ctx) => {
  const { id } = ctx.query
  let post
  try {
    const res = await getQuestion(id)
    post = res
  } catch (error) {

  }

  return { post }
}
