import About from "../components/About";
import Contact from "../components/Contact";
import Dashboard from "../components/Dashboard";

export const routes = [
  {
    id: 1,
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    id: 2,
    path: "/about",
    component: <About />,
  },

  {
    id: 3,
    path: "/contact",
    component: <Contact />,
  },
];
