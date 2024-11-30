import { Navbar } from "./components/ui"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
