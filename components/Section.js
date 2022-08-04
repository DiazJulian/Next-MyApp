import React from 'react'
import Link from 'next/link'
import { Button, H1, SectionCtn } from '../styles/components/Section'
import { Users } from './UsersSection'

export default function Section () {
  return (
    <SectionCtn>
      <H1>¡Encuentra a gente conocida y mira lo que estan publicando!</H1>
      <Link href="/register">
        <Button>Crear cuenta</Button>
      </Link>
      <Users />
    </SectionCtn>
  )
}
