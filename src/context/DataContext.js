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
      picture: "https://picsum.photos/id/61/400?grayscale",
      name: "Lauren Berg",
      description:
        "Velit fugiat ea nostrud sit pariatur mollit laboris est consequat sint dolor.",
    },
    {
      _id: "634fe3bee36488c86d3a9321",
      picture: "https://picsum.photos/id/42/400?grayscale",
      name: "John Doe",
      description:
        "Ea amet excepteur dolore cupidatat ullamco.",
    },{
      _id: "634fe3bee36488c86d3a9323",
      picture: "https://picsum.photos/id/42/400?grayscale",
      name: "Michael Keaton",
      description:
        "Ea labore sit cillum id velit minim fugiat duis officia.",
    },{
      _id: "634fe3bee36488c86d3a9324",
      picture: "https://picsum.photos/id/92/400?grayscale",
      name: "Ben Ctor",
      description:
        "Quis est amet dolore laboris ex duis tempor.",
    },{
      _id: "634fe3bee36488c86d3a9327",
      picture: "https://picsum.photos/id/98/400?grayscale",
      name: "Ralph laboris",
      description:
        "Occaecat qui Lorem labore adipisicing officia anim ad labore exercitation ut.",
    },
  ]);

  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
