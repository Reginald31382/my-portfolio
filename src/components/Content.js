import React from "react";
import About from "../pages/About";
import Feedback from "../pages/Feedback";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import { Route, Routes } from "react-router-dom";

const routes = [
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
  return (
    <div className="content">
      <Routes>{routeComponents}</Routes>
    </div>
  );
}

export default Content;
