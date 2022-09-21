import { useEffect } from 'react'
import Navigation from '../../components/Navigation'
import { QuestionId } from '../../components/Question/QuestionId'
import { GetQuestionService } from '../../services/question'
import { redirectIfNotAuth } from '../../services/user'

export default function QuestionPage ({ post }) {
  useEffect(() => {
    redirectIfNotAuth()
  }, [])

  return (
    <>
      <Navigation />
      <QuestionId post={post} />
    </>
  )
}

QuestionPage.getInitialProps = async (ctx) => {
  const { id } = ctx.query
  let post
  try {
    const res = await GetQuestionService(id)
    post = res
  } catch (error) {

  }

  return { post }
}
