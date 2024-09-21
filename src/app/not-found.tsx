import { Typography } from "@material-tailwind/react"

const NotFoundRoute = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-16"
      >
        <path
          fill-rule="evenodd"
          d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
          clip-rule="evenodd"
        />
      </svg>

      <Typography variant="h3" className="font-semibold">
        Page not found
      </Typography>
      <Typography variant="paragraph">
        The page you tried to access doesn't exist.
      </Typography>
    </div>
  )
}

export default NotFoundRoute
