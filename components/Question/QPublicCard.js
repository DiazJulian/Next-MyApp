import Link from 'next/link'
import { useEffect } from 'react'
import { useQuestion } from '../../hooks/useQuestion'
import { Card, QH3 } from '../../styles/components/Questions'

export function PublicCard ({ ...item }) {
  const { questionComments, getQuestionComments } = useQuestion()

  useEffect(() => {
    getQuestionComments(item._id)
  }, [item._id])

  return (
    <>
    {
      questionComments > 0 &&
      <Link href={`/question/${item._id}`} key={item._id} >
        <Card>
        <QH3>{item.question}</QH3>
        </Card>
      </Link>
    }
    </>
  )
}
