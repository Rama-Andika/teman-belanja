import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center opacity-100 relative"
      style={{ backgroundImage: `url(${unsplashimg.src})` }}
    >
      <div className="font-roboto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 w-1/2 max-[620px]:w-2/3 max-[500px]:w-5/6">
        <div className="flex justify-between">
          <div className="mb-10">Log In</div>
          <div>OXYSYSTEM</div>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              placeholder="name@flowbite.com"
              required
              type="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" required type="password" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
