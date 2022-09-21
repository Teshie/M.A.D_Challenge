import React from "react";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const checkValidation = () => {
    if (email.indexOf("EP") > -1) {
      router.push("/HomeQA");
    } else {
      alert("InCorrect Passport Number, Please try again");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-red-800">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block">Upload Your Passport Photo</label>
                <input
                  type="file"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Enter Your Passport Number</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="EP123...."
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button
                  type="button"
                  onClick={() => checkValidation()}
                  className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Login
                </button>
                <a href="#" className="text-sm text-blue-600 hover:underline">
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
