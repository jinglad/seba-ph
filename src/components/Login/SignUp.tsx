import { Link, useNavigate } from "react-router-dom";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";
import { createUser } from "../../requests/createUser";
import { useDispatch } from "react-redux";
import CustomModal from "../Reused/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { User } from "../../models/User";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>();
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { mutateAsync: addUser, isLoading: isAddingUser } = useMutation(
    createUser,
    {
      onSuccess: (data) => {
        toast.success("Account Created Successfully");
        navigate("/login");
        reset();
      },
      onError: (error: any) => {
        console.error(error);
        toast.error(error.message);
        // reset();
      },
    }
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const user: User = {
      name: data.fullName,
      email: data.email,
      password: data.password,
    };
    await addUser(user);
  };

  return (
    <div className="relative">
      <Header />
      {/* <button onClick={() => setIsSuccess(true)}>Open Modal</button> */}
      <main className="min-h-[55vh]">
        <div className="flex flex-col items-center justify-center h-[32rem]">
          <h1 className="text-4xl font-semibold text-primary">Sign Up</h1>
          <h4 className="text-lg mt-2">
            Sign up to get access to our services
          </h4>
          <div className="py-3 px-4 w-[400px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-center"
            >
              <div className="mb-4 w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full py-2 px-4 border border-gray-400 rounded-lg"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-600">Full name is required</span>
                )}
              </div>
              <div className="mb-4 w-full">
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
              <div className="mb-4 w-full">
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
              <div className="mb-4 w-full">
                <button
                  disabled={isAddingUser}
                  type="submit"
                  className="w-full py-2 px-4 border border-gray-400 rounded-lg text-white bg-primary active:translate-y-1"
                  style={{
                    cursor: isAddingUser ? "not-allowed" : "pointer",
                    opacity: isAddingUser ? 0.5 : 1,
                  }}
                >
                  {isAddingUser ? "Loading" : "Sign Up"}
                </button>
              </div>
              <div>
                <p className="text-center text-gray-500">
                  Already have an account?{" "}
                  <Link className="text-primary underline" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <div className=" bottom-0 w-full">
        <Footer />
      </div>

      <CustomModal open={isSuccess} onClose={() => setIsSuccess(false)}>
        <Box
          sx={{
            width: "400px",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              py: 5,
            }}
          >
            <CheckCircleIcon sx={{ width: "30px" }} />
            <Typography>
              Congratulations, your registration successfull.
            </Typography>
          </Box>
        </Box>
      </CustomModal>
    </div>
  );
};

export default SignUp;
