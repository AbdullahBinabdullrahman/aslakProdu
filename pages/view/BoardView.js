import { Button } from "@mui/material";
import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";

const options = ["الوان مدمجه", "لون واحد"];

const BoardView = ({ setState }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleBackButton = () => {
    setState("pick");
  };

  const handleNextView = () => {
    setState("boardView");
  };
  return (
    <div>
      <Button
        onClick={handleBackButton}
        style={{ background: "##3b0764", color: "white" }}
      >
        Back
      </Button>
      {/* icon  */}

      <div className="text-4xl font-bold text-center text-white">
        اختيار اللوح
      </div>

      <div onClick={handleNextView} className="mx-auto mt-10">
        {options.map((e, index) => {
          return (
            <div
              key={index}
              onClick={() => alert(`نبدأ صناعه ${e}`)}
              className="items-center p-4 mb-2 text-center text-white transition-all border border-gray-300 rounded-md cursor-pointer hover:border-purple-950 hover:text-purple-950 "
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardView;
