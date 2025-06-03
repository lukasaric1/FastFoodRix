import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopAppBar from "./components/TopAppBar";

function App() {
  return (
    <BrowserRouter>
      <TopAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Location" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
