import React, { useContext } from "react";
import { PathContext } from "../context/PathContext";
import Home from "../pages/Home";
import Profile from "./Profile";

function Render() {
  // eslint-disable-next-line
  const [path, setPath] = useContext(PathContext);
  const renderFunction = () => {
    if (path === "profile") return <Profile />;
    else return <Home />;
  };
  return <>{renderFunction()}</>;
}

export default Render;
