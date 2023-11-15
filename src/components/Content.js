import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Feedback from "../pages/Feedback";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/feedback", name: "Feedback", Component: Feedback },
  { path: "/portfolio", name: "Portfolio", Component: Portfolio },
  { path: "/resume", name: "Resume", Component: Resume },
  { path: "/skills", name: "Skills", Component: Skills },
];

const routeComponents = routes.map(({ path, Component }) => (
  <Route path={path} element={<Component />} />
));

function Content() {
  const location = useLocation();
  return (
    <div className="content">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          {routeComponents}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Content;
