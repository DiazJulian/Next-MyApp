import React from 'react'
import { Aside } from '../styles/Aside'
import {Container, Header, Layout} from '../styles/Layout'
import { withTransition } from '../transitionPage'

function Home () {
    return(
        <>
            <h1>Aplicación de practica</h1>
            <Header></Header>
            <Layout>
                <Container></Container>
                <Aside></Aside>
            </Layout>
        </>
    )
}

export default withTransition(Home)