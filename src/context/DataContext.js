import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [data, setData] = useState([
    {
      _id: "634fe3be3001871f3ac9a07c",
      picture: "https://picsum.photos/seed/picsum/400",
      name: "Forbes Steele",
      description: "Anim eiusmod do duis aliqua est quis laboris.",
    },
    {
      _id: "634fe3be6282770d59c16366",
      picture: "https://picsum.photos/400?grayscale",
      name: "Stella Holt",
      description:
        "Amet cillum est consequat deserunt aute non eu est aliqua cupidatat aliquip ipsum est irure.",
    },
    {
      _id: "634fe3beccd8f3d17072d871",
      picture: "https://picsum.photos/id/237/400",
      name: "Mendoza Durham",
      description: "Culpa minim officia quis reprehenderit ullamco anim non.",
    },
    {
      _id: "634fe3bee36488c86d3a9326",
      picture: "https://picsum.photos/id/22/400",
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
