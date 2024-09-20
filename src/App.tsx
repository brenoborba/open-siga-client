import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react"

export default function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Typography variant="h1">OpenSiga</Typography>

      <Card className="w-96">
        <CardBody>
          <Typography variant="lead" className="mb-4">
            Sign in
          </Typography>
          <div className="mb-2 space-y-4">
            <Input placeholder="Email" label="Email" size="lg" type="email" />
            <Input
              placeholder="Password"
              label="Password"
              size="lg"
              type="password"
            />
          </div>

          <Typography variant="paragraph" className="text-sm">
            Forgot your password? <a href="#">Reset it here</a>
          </Typography>
        </CardBody>
        <CardFooter className="flex pt-0">
          <Button color="black" size="lg" className="ml-auto">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
