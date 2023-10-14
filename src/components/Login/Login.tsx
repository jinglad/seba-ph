import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../redux/userSlice";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../requests/getToken";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>();
  const [cookies, setCookie, removeCookie] = useCookies(["seba-token"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { mutateAsync: getUser, isLoading: isGettingUser } = useMutation(
    login,
    {
      onSuccess: (data: any) => {
        console.log(data);
        dispatch(setUser(data.user));
        dispatch(setToken(data.accessToken));
        toast.success("Loggedin Successfully");
        navigate(location.state?.from || "/", { replace: true });
        reset();
      },
      onError: (error: any) => {
        console.error(error);
        console.log(error);
        toast.error(error.message);
        // reset();
      },
    }
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const user: {
      email: string;
      password: string;
    } = {
      email: data.email,
      password: data.password,
    };
    await getUser(user);
  };

  return (
    <div className="relative">
      <Header />
      <main>
        <div className="flex flex-col items-center justify-center h-[32rem]">
          <h1 className="text-4xl font-semibold text-primary">Login</h1>
          <h4 className="text-lg mt-2">Login to get access to our services</h4>
          <div className="py-3 px-4 w-[400px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-center"
            >
              <div className="mb-5 w-full">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full py-2 px-4 border border-gray-400 rounded-lg"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>
              <div className="mb-5 w-full">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-2 px-4 border border-gray-400 rounded-lg"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">
                    Password field is required
                  </span>
                )}
              </div>
              <div className="mb-5 w-full">
                <button
                  disabled={isGettingUser}
                  type="submit"
                  className="w-full py-2 px-4 border border-gray-400 rounded-lg text-white bg-primary active:translate-y-1"
                >
                  {isGettingUser ? "Loading..." : "Login"}
                </button>
              </div>
              <div>
                <p className="text-center text-gray-500">
                  Don't have an account?{" "}
                  <Link className="text-primary underline" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
