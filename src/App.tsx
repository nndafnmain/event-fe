import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./features/auth/components/Register";
import { Auth } from "./pages/auth/Auth";
import { Login } from "./features/auth/components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
