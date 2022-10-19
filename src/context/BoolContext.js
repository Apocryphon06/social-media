import { createContext, useState } from "react";

export const BoolContext = createContext();

export const BoolContextProvider = (props) => {
  const [bool, setBool] = useState(false);
  return (
    <BoolContext.Provider value={[bool, setBool]}>
      {props.children}
    </BoolContext.Provider>
  );
};
