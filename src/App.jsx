import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Layout from "./Layout";
import Login from "./components/Login";
import { routes } from "./Routes";
import Pages from "./Pages";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Login First */}
        <Route path="/login" element={<Login />} />

        {/* Home Page */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Pages />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Other Pages */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
