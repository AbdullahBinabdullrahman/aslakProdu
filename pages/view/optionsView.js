import { Button } from "@mui/material";
import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";

const options = ["PVC", "Z1", "PE", "PU", "TEFLON"];

const OptionsView = ({ setState }) => {
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
        اختيار ماده غطاء السلك
      </div>

      <div onClick={handleNextView} className="grid grid-cols-4 gap-2 mt-2">
        {options.map((e, index) => {
          return (
            <div
              key={index}
              className="items-center p-4 text-center text-white transition-all border border-gray-300 rounded-md cursor-pointer hover:border-purple-950 hover:text-purple-950 text "
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionsView;
