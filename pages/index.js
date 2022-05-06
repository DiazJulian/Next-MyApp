import React from 'react'
import Navigation from '../components/Navigation'
import { UsersPosts } from '../components/Posts/UsersPosts'
import { useUser } from '../hooks/useUser'
import Header from '../components/Header'
import { withTransition } from '../transitionPage'
import Section from '../components/Section'
import Form from '../components/Posts/Form'

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
            : <>
            <Form /> 
            <UsersPosts />
            </>
            }    
        </>
    )
}

export default withTransition(Home)