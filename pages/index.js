import React from 'react'
import Navigation from '../components/Navigation'
import { UsersPosts } from '../components/Posts/UsersPosts'
import { useUser } from '../hooks/useUser'
import Header from '../components/Header'
import { withTransition } from '../transitionPage'
import Section from '../components/Section'
import { usePost } from '../hooks/usePost'
import Loading from '../components/Loaders/Loading'

function Home () {
  const { session } = useUser()
  const { loading } = usePost()

  return (
        <>
        {
            !loading
              ? <Loading />
              : <>
            <Navigation />
            { !session
              ? <>
                <Header />
                <Section />
                </>
              : <UsersPosts />
            }
            </>
        }
        </>
  )
}

export default withTransition(Home)
