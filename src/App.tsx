import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Trip from "./pages/Trip";
import Auth from "./pages/Auth";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Header showUser={true} />}>
          <Route index element={<Home />} />
          <Route path="trip/:tripId" element={<Trip />} />
          <Route path="auth" element={<Auth />} />
        </Route>
        <Route path="/" element={<Header showUser={false} />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signout" element={<Signout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
