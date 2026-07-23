import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Passions from './pages/Passions'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/passions" element={<PageTransition><Passions /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
