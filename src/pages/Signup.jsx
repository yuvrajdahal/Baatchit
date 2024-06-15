import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import { useSignupMutation } from "../appstate/auth/auth_service";

function Signup() {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [mutation, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();

  async function signupHanlder(e) {
    e.preventDefault();
    const data = await mutation(userInfo);
    console.log(data);
    if (data?.data?.token) {
      const token = data.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    }
  }

  return (
    <div className="bg-dark h-dvh flex justify-center items-center ">
      <form
        className="flex flex-col   w-full max-w-lg border-2 border-white/20 rounded px-8 py-10 gap-5 backdrop-blur-md"
        onSubmit={signupHanlder}
      >
        <Link to="/">
          <img
            className="w-full max-w-60 mx-auto block "
            src="/images/main-logo.png"
            alt="Main logo"
          />
        </Link>
        <p className="font-bold text-xl text-center text-light mb-3">
          Signup to see photos and videos from your friends.
        </p>

        <input
          name="fullname"
          className="block w-full p-3 rounded-lg"
          type="text"
          placeholder="Full Name"
          onChange={(e) =>
            setUserInfo((prev) => ({
              ...prev,
              fullname: e.target.value,
            }))
          }
        />
        <input
          className="block w-full p-3 rounded-lg"
          name="username"
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setUserInfo((prev) => ({
              ...prev,
              username: e.target.value,
            }))
          }
        />
        <input
          className="block w-full p-3 rounded-lg"
          type="email"
          name="email"
          onChange={(e) =>
            setUserInfo((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          placeholder="Email"
        />
        <input
          className="block w-full p-3 rounded-lg"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUserInfo((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <span className="text-light">
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
        </span>
        <Button disabled={isLoading} variant="default">
          {isLoading ? "Loading..." : "Sign up"}
        </Button>
        <span className="text-light text-center">or</span>
        <Button variant="google" type="button">
          <svg
            className="w-8 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z" />
          </svg>
          Sign up With Google
        </Button>
        <span className="text-xl text-light text-center">
          Already have an account?{" "}
          <Link className="text-accent text-xl inline" to="/login">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
