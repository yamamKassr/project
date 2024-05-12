import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SingleCategory } from "./pages/SingleCategory";
import { SingleStore } from "./pages/SingleStore";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<SingleCategory />} />
      <Route path="/category/:id/store/:storeId" element={<SingleStore />} />
    </Routes>
  );
}

export default App;
