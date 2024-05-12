import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SingleCategory } from "./pages/SingleCategory";
import { SingleStore } from "./pages/SingleStore";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<SingleCategory />} />
      <Route path="/category/:id/store/:storeId" element={<SingleStore />} />
    </Routes>
  );
}

export default App;
