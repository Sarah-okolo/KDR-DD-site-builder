import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuildCanvas from "./pages/buildCanvas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/build-site" element={<BuildCanvas />} />
    </Routes>
  );
}

export default App;
