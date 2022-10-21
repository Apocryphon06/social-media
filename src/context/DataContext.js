import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [data, setData] = useState([
    {
      _id: "634fe3be6282770d59c16366",
      picture: "https://picsum.photos/id/12/400?grayscale",
      name: "Stella Holt",
      description:
        "Amet cillum est consequat deserunt aute non eu est aliqua cupidatat aliquip ipsum est irure.",
    },

    {
      _id: "634fe3bee36488c86d3a9326",
      picture: "https://picsum.photos/id/22/400?grayscale",
      name: "Lauren Berg",
      description:
        "Velit fugiat ea nostrud sit pariatur mollit laboris est consequat sint dolor.",
    },
  ]);

  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
