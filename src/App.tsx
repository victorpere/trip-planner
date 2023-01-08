import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Trip from "./pages/Trip";
import Auth from "./pages/Auth";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout showUser={true} />}>
          <Route index element={<Home />} />
          <Route path="trip/:tripId" element={<Trip />} />
          <Route path="auth" element={<Auth />} />
        </Route>
        <Route path="/" element={<Layout showUser={false} />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signout" element={<Signout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
