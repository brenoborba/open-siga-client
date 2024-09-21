import { Button, Typography } from "@material-tailwind/react"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Typography variant="h3">HomePage</Typography>

      <Typography variant="paragraph">
        This is the home page of the app.
      </Typography>

      <Link to="/login">
        <Button className="flex items-center gap-2">
          Login page{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </Link>
    </div>
  )
}

export default HomePage
