import { useEffect } from 'react'
import { useUser } from '../../hooks/useUser'
import { useQuestion } from '../../hooks/useQuestion'
import { Container, Section } from '../../styles/components/Questions'
import { QForm } from './QForm'
import { PrivateCard } from './QPrivateCard'
import { PublicCard } from './QPublicCard'

export function Questions ({ user }) {
  const { name } = useUser()
  const { allQuestions, getUserQuestions } = useQuestion()

  useEffect(() => {
    getUserQuestions(user)
  }, [])

  return (
    <Section>
      {
        (name !== user) &&
        <QForm user={user} />
      }
      <Container>
      {allQuestions && allQuestions.map(item => (
        user === name
          ? <PrivateCard key={item._id} {...item} />
          : <PublicCard key={item._id} {...item} />
      ))}
      </Container>
    </Section>
  )
}
