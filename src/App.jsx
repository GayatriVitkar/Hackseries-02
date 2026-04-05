import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Sections/Hero'
import Why from './Sections/Why'
import Impact from './Sections/Impact'
import RoadmapsGrid from './Sections/RoadmapsGrid'

import RoadmapWebDev from './Pages/RoadmapWebDev'
import RoadmapAIML from './Pages/RoadmapAIML'
import RoadmapDSA from './Pages/RoadmapDSA'
import RoadmapProgramming from './Pages/RoadmapProgramming'
import RoadmapCloud from './Pages/RoadmapCloud'

function Home() {
  return (
    /* This single DIV wraps everything */
    <div className="flex flex-col min-h-screen w-full bg-black overflow-x-hidden">

      <Header />

      {/* Main content area */}
      <main className="grow">
        <Hero />
        <Why />
        <Impact />
        <RoadmapsGrid />
      </main>

      <Footer />

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmaps" element={<Outlet />}>
          <Route path="webdev" element={<RoadmapWebDev />} />
          <Route path="aiml" element={<RoadmapAIML />} />
          <Route path="cloud" element={<RoadmapCloud />} />
          <Route path="programming" element={<RoadmapProgramming />} />
          <Route path="dsa" element={<RoadmapDSA />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App