import React, { useState } from "react";
import MyContext from "./myContext";

function MyState(props) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#FF0000";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
    }
  };
  return (
    <MyContext.Provider value={{ mode, toggleMode }}>
      {props.childrens}
    </MyContext.Provider>
  );
}

export default MyState;
