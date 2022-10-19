import { createContext, useState } from "react";

export const PathContext = createContext();

export const PathContextProvider = (props) => {
  const [path, setPath] = useState("home");
  return (
    <PathContext.Provider value={[path, setPath]}>
      {props.children}
    </PathContext.Provider>
  );
};
