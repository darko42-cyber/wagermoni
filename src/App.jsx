import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/admin/index";
import Store from "./redux/store";
import { getAllPredictions } from "./redux/actions/predictions";
import { loadUser } from "./redux/actions/users";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import InvestmentPage from "./pages/investment/InvestmentPage";
import RiskPage from "./pages/risk/RiskPage";
import AboutPage from "./pages/about/AboutPage";
import Footer from "./components/layout/Footer";
import Spinner from "./components/layout/Spinner";
const App = () => {
  const { loading } = useSelector((state) => state.predictions);
  useEffect(() => {
    Store.dispatch(getAllPredictions());
    Store.dispatch(loadUser());
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/risk" element={<RiskPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
