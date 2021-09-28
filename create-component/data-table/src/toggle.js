import React, { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import "./App.css";

export default function Switch() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onChange = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" })
    }
  }

  return (
    <input type="checkbox" onChange={onChange} />
  )
};