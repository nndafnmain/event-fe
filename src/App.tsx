import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./features/auth/components/Register";
import { Auth } from "./pages/auth/Auth";
import { Login } from "./features/auth/components/Login";
import { Toaster } from "sonner";
import { Home } from "./features/home/Home";
import { EventDetail } from "./pages/events/EventDetail";
import { Header } from "./features/home/components/Header";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/events">
          <Route path="detail" element={<EventDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
