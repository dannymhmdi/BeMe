import React from 'react'
import { Header } from '../../src/component/header'
import { Footer } from '../../src/component/footer'

const LandingLayout = ({children}) => {
  return (
    <>
    <Header></Header>
    <main>{children}</main>
    <Footer></Footer>
    </>
  )
}

export default LandingLayout