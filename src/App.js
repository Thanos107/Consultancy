import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Authentication/Signin";
import Signup from "./pages/Authentication/Signup";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Contact from "./pages/Contact/contact";
import Consultant_profile from "./pages/consultant_profile/consultant_profile";
import Consultant_listing from "./pages/consultant_listing/consultant_listing";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consultants" element={<Consultant_listing />} />
            <Route path="/consultants/:id" element={<Consultant_profile />} />
          </Routes>
        </div>

        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
