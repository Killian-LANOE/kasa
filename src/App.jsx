import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import A_Propos from "./components/A_Propos/A_Propos.jsx";
import Rent_Pages from "./components/Rent_Pages/Rent_Pages.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="font-Montserrat">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/A_Propos" element={<A_Propos />}></Route>
        <Route path="/location/:id" element={<Rent_Pages />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
