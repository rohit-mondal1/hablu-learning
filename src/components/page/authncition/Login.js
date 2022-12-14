import { sendPasswordResetEmail } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Context/UserContext";

const Login = () => {
  const { googlesignupFunc, gitsignFunc, loginemailfunc, auth } =
    useContext(Authcontext);
  const naveget = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // login gmail and password
  const handellogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginemailfunc(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        toast.success("succes full log in");
        naveget(from, { replace: true });
      })

      .catch((e) => {
        toast.error(e.message);
      });
  };

  // google sign up
  const handelgooglesignup = () => {
    googlesignupFunc()
      .then((result) => {
        toast.success("success full sign up with GOOGLE");
        naveget(from, { replace: true });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  // github sign up

  const handelgitsignup = () => {
    gitsignFunc()
      .then((result) => {
        toast.success("success full sign up with GIT-HUB");
        naveget(from, { replace: true });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  // one blur in email get
  const [getemail, setGetgmail] = useState();
  const emailget = (e) => {
    setGetgmail(e.target.value);
  };
  // forgot password
  const forgotpassword = () => {
    sendPasswordResetEmail(auth, getemail)
      .then(() => {
        toast.success("checked your email");
      })
      .catch(() => {});
  };

  // chetch box
  const [chetch, setChetch] = useState(false);
  const handelchack = (p) => {
    setChetch(p.target.checked);
  };

  return (
    <div data-aos="zoom-out-up" className="w-full mx-auto my-10  max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        onSubmit={handellogin}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            onBlur={emailget}
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <button onClick={forgotpassword}>Forgot Password?</button>
          </div>
        </div>
        <div className="flex items-center">
          <input
            onClick={handelchack}
            type="checkbox"
            name="remember"
            id="remember"
            aria-label="Remember me"
            className="mr-1 rounded-sm focus:ring-blue-400 focus:dark:border-blue-400 focus:ring-2 accent-blue-400"
          />
          <label htmlFor="remember" className="text-sm dark:text-gray-400">
            Remember me
          </label>
        </div>
        <button
          disabled={!chetch}
          className={`block w-full p-3 text-center rounded-sm ${
            chetch
              ? " dark:text-gray-900 dark:bg-blue-400"
              : " dark:text-gray-800 dark:bg-blue-300"
          }`}
        >
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handelgooglesignup}
          aria-label="Log in with Google "
          className="p-3 text-3xl hover:opacity-80 rounded-sm"
        >
          <FcGoogle />
        </button>
        <button
          onClick={handelgitsignup}
          aria-label="Log in with Twitter"
          className="p-3 text-3xl hover:opacity-80 rounded-sm"
        >
          <AiFillGithub />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to="/signup"
          className="underline dark:text-gray-100"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
