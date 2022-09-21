import React from "react";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("EP123");
  const [password, setPassword] = React.useState("");

  const checkValidation = () => {
    if (email.indexOf("EP") > -1) {
      router.push("/HomeQA");
    } else {
      alert("hello not found inside your_string");
    }
  };

  return (
    <div>
      <div class="flex items-center justify-center min-h-screen bg-red-800">
        <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 class="text-2xl font-bold text-center">Login to your account</h3>
          <form action="">
            <div class="mt-4">
              <div>
                <label class="block" for="email">
                  Upload Your Passport Photo
                </label>
                <input
                  type="file"
                  placeholder="Email"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block">Enter Your Passport Number</label>
                <input
                  type="text"
                  placeholder="EP123...."
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="flex items-baseline justify-between">
                <button
                  type="button"
                  onClick={() => checkValidation()}
                  class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Login
                </button>
                <a href="#" class="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
