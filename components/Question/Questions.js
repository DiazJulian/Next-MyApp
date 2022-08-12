import { useEffect, useState } from 'react'
import Link from 'next/link'
import { userQuestion } from '../../services/posts'
import { useUser } from '../../hooks/useUser'
import { Card, Container, QH3 } from '../../styles/components/Questions'
import { QForm } from './QForm'

export function Questions ({ user }) {
  const [questions, setQuestions] = useState([])
  const { name } = useUser()

  useEffect(() => {
    const allQuestions = async () => {
      const res = await userQuestion(user)
      console.log(res)
      if (res) {
        setQuestions(res)
      }
    }
    allQuestions()
  }, [])

  return (
    <Container>
      {
        (name !== user) &&
        <QForm user={user} />
      }
      {questions && questions.map(item => (
        <Link href={`/question/${item._id}`} key={item._id} >
          <Card>
            <QH3>{item.question}</QH3>
          </Card>
        </Link>
      ))}
    </Container>
  )
}
