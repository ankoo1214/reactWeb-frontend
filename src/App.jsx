import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Team from "./components/Team/Team";
import Form from "./components/Form/Form";
import { useEffect } from "react";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
