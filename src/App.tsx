import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./features/auth/components/Register";
import { Auth } from "./pages/auth/Auth";
import { Login } from "./features/auth/components/Login";
import { Toaster } from "sonner";
import { Home } from "./features/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
