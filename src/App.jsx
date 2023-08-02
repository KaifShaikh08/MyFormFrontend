import ChakraTheme from "./ChakraTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { Toaster } from "react-hot-toast";
import Home from "./Home";

function App() {
  return (
    <Router>
      <ChakraTheme />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
