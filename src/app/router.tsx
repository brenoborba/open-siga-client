import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./routes/app/home-page"
import SignInPage from "./routes/auth/signin-page"
import NotFound from "./not-found"

type Props = {}

const AppRouter = (props: Props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ])
  return <RouterProvider router={router} />
}

export default AppRouter
