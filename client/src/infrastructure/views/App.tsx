import React, { lazy, Suspense } from 'react'

import { Container, Loader } from 'infrastructure/views/components/ui'

const HomeView = lazy(async () => await import('infrastructure/views/pages/Home'))

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <Container className="container">
        <HomeView />
      </Container>
    </Suspense>
  )
}

export default App
