"use client";

import { useState } from "react";
import PickView from "./view/pickUser";
import AuthView from "./view/authView";
import OptionsView from "./view/optionsView";
import BoardView from "./view/BoardView";
import "../app/globals.css";

export default function Home() {
  const [state, setState] = useState("pick");
  const Views = () => {
    switch (state) {
      case "pick":
        return <PickView setState={setState} />;
      case "auth":
        return <AuthView setState={setState} />;
      case "options":
        return <OptionsView setState={setState} />;
      case "boardView":
        return <BoardView setState={setState} />;

      default:
        return <div></div>;
    }
  };

  return (
    <div className="flex items-center justify-center flex-1 h-screen bg-gradient-to-r from-purple-950 via-purple-500 to-blue-500 ">
      <Views />
    </div>
  );
}
