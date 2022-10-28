import { Header } from "./components/Header/Header"
import { Menu } from "./components/Menu/Menu"
import { WebProvider } from "./context/context"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./Pages/Home/Home"
import { About } from "./Pages/About/About"
import { Projects } from "./Pages/Projects/Projects"
import { NotFound } from "./Pages/NotFound/NotFound"


function App() {

  return (
    <BrowserRouter>
      <WebProvider>
          <Header />
          <Menu />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </WebProvider>
    </BrowserRouter>
  )
}

export default App
