import { Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {
  const unsplashimg = {
    src: "https://source.unsplash.com/1600x900/?random",
    alt: "random unsplash image",
  };
  return (
    <>
      <div className="grid grid-cols-12 min-h-screen">
        <div
          className="bg-cover bg-no-repeat bg-center relative col-span-5 max-[523px]:hidden"
          style={{ backgroundImage: `url(${unsplashimg.src})` }}
        ></div>
        <div className="font-roboto bg-white px-20 max-[635px]:px-10 flex flex-col justify-center w-full rounded-sm shadow-sm col-span-7 max-[523px]:col-span-12">
          <div className="flex justify-between">
            <div className="mb-10 font-semibold">Log In</div>
            <div className="font-bold">OXYSYSTEM</div>
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
            <button
              type="submit"
              className="bg-[#fa5a96] py-2 text-white rounded-sm shadow-sm "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
