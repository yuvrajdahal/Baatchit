import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useLoginMutation } from "../appstate/auth/auth_service";
import { useState } from "react";
import Input from "../components/Input";
import { z } from "zod";
import { baseUrl } from "../lib/api";

function Login() {
  const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });
  const [mutation, { isLoading }] = useLoginMutation();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  async function loginHandler(e) {
    e.preventDefault();

    const validationResult = loginSchema.safeParse(loginInfo);
    if (!validationResult.success) {
      const newErrors = validationResult.error.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setErrors(newErrors);
      return;
    }

    const data = await mutation(loginInfo);
    if (data?.data?.token) {
      const token = data.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    }
  }
  return (
    <div className="bg-dark h-dvh flex justify-center items-center ">
      <form
        className="flex flex-col  w-full max-w-lg border-2 border-white/20 rounded px-8 py-10 gap-5 backdrop-blur-md"
        action=""
        onSubmit={loginHandler}
      >
        <Link to="/">
          <img
            className="w-full  max-w-60 mx-auto block mb-3"
            src="/images/main-logo.png"
            alt="Main logo"
          />
        </Link>
        <Input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          onChange={(e) =>
            setLoginInfo((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          value={loginInfo.email}
          variant={errors.email ? "error" : "default"}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
        <Input
          type="password"
          name="password"
          placeholder="********"
          onChange={(e) =>
            setLoginInfo((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          value={loginInfo.password}
          variant={errors.password ? "error" : "default"}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}

        <Button disabled={isLoading} variant="default">
          {isLoading ? "Loading..." : "Login"}
        </Button>
        <span className="text-light text-center">or</span>
        <a href={`${baseUrl}auth/google`}>
          <Button variant="google" type="button">
            <svg
              className="w-7 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z" />
            </svg>
            Login With Google
          </Button>
        </a>
        <Link to="/forgot-password" className="text-lg text-accent text-center">
          Forgot Password?
        </Link>
        <span className="text-lg text-light text-center">
          Dont have an Account?{" "}
          <Link className="text-accent text-xl inline" to="/signup">
            Sign up
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
