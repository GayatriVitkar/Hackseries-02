import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  return (
    /* This single DIV wraps everything */
    <div className="flex flex-col min-h-screen w-full bg-black overflow-x-hidden">

      <Header />

      {/* Main content area */}
      <main className="flex-grow">
        <Hero />
        <Why />
        <Impact />
      </main>

      <Footer />

    </div>
  )
}

export default App