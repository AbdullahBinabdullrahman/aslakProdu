import { Button } from "@mui/material";
import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
const AuthView = ({ setState }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleBackButton = () => {
    setState("pick");
  };
  return (
    <div>
      {/* icon  */}

      <div className="w-56 h-56">
        <IoPersonCircle className="w-full h-full text-gray-300" />
      </div>

      <div className="px-2 py-1 mt-2 bg-gray-300 border border-purple-500 rounded-lg ">
        {/* username */}

        <input
          placeholder="username"
          className="bg-transparent outline-none text-purple-950 "
        />
      </div>

      <div className="px-2 py-1 mt-2 bg-gray-300 border border-purple-500 rounded-lg">
        {/* username */}

        <input
          type="password"
          placeholder="password"
          className="bg-transparent outline-none text-purple-950 "
        />
      </div>

      <div className="flex justify-between flex-1">
        <div className="mt-2 ">
          <Button
            onClick={() => alert("Open")}
            variant="contained"
            style={{
              background: "#3b0764",
            }}
          >
            Submit
          </Button>
        </div>

        <div className="flex justify-center mt-2">
          <Button
            onClick={handleBackButton}
            variant="contained"
            className="bg-gray-300 hover:bg-purple-900"
            style={{
              background: "#d1d5db",
              color: "#3b0764",
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthView;
