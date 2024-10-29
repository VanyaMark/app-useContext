/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import HomePage from "./pages/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";
import PrivateData from "./pages/privateData.tsx";
import { AuthContextProvider } from "./context/AUthContextProvider.tsx";
import RequireAuth from "./components/requireAuth.tsx";

function App() {


  return (
    // 02 Provide context
    <AuthContextProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="private"
            element={
              <RequireAuth>
                <PrivateData />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
