import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Sections/Hero'

function App() {
  return (
    /* This single DIV wraps everything */
    <div className="flex flex-col min-h-screen bg-black">

      <Header />

      {/* Main content area */}
      <main className="flex-grow">
        <Hero />
      </main>

      <Footer />

    </div>
  )
}

export default App