import React from 'react'

import { Container } from 'infrastructure/views/components/ui'
import Home from 'infrastructure/views/pages/Home'

const App = (): JSX.Element => {
  return (
    <Container className="container">
      <Home />
    </Container>
  )
}

export default App
