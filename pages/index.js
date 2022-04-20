import React from 'react'
import Navigation from '../components/Navigation'
import { UsersPosts } from '../components/UsersPosts'
import { useUser } from '../hooks/useUser'
import Header from '../components/Header'
import { withTransition } from '../transitionPage'
import Section from '../components/Section'

function Home () {

    const { session } = useUser()
      
    return(
        <>
            <Navigation />
            { !session ? 
            <>
            <Header />
            <Section />
            </>

            :  <UsersPosts />
            }    
        </>
    )
}

export default withTransition(Home)