import { Navbar } from "./components/ui"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home";
import PagesLayout from "./components/layouts/page-layouts/pagesLayout";




function App() {
  return (
    <>
      <Navbar />
      <PagesLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PagesLayout>
    </>
  );
}

export default App
