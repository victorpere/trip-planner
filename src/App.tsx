import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import HeaderUser from "./components/Header/HeaderUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header><HeaderUser /></Header>}>
          <Route index element={<Home />} />
          {/* <Route path="trip/:tripId" element={<Trip />} />
          <Route path="auth" element={<Auth />} /> */}
        </Route>
        <Route path="/" element={<Header></Header>}>
          {/* <Route path="signin" element={<Signin />} />
          <Route path="signout" element={<Signout />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
