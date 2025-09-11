import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-xl p-6 w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Sign Up</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-lg px-3 py-2 mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-3 py-2 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-3 py-2 mb-3"
        />

        <button className="w-full bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 mb-3">
          Sign Up
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
