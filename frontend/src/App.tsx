import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Cykler from "./pages/Cykler";
import Scootere from "./pages/Scootere";
import Reparation from "./pages/Reparation";
import Om from "./pages/Om";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cykler" element={<Cykler />} />
          <Route path="/scootere" element={<Scootere />} />
          <Route path="/reparation" element={<Reparation />} />
          <Route path="/om" element={<Om />} />
          <Route path="/kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}