import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home";
import Work from "./routes/Work/Work";
import { BASE, WORK_1, WORK_2 } from "./routes";
import Noise from "./components/Noise/Noise";
import Nav from "./components/Nav/Nav";

const router = createBrowserRouter([
  {
    path: BASE,
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: `${BASE}${WORK_1}`,
    element: <Work />,
  },
  {
    path: `${BASE}${WORK_2}`,
    element: <Work />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Noise />
    <RouterProvider router={router} />
  </React.StrictMode>
);
