import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "@material-tailwind/react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
