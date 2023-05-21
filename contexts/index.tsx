import React, { FC, createContext, useReducer } from "react";
import { mainReducer } from "../reducers";

type InitialStateType = {
  loading: boolean;
  theme: string;
  user: {
    name: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    image: string;
  };
  contacts: any[];
  filteredContacts: any[];
  chats: any[];
};

const initialState: InitialStateType = {
  loading: false,
  theme: "dark",
  user: {
    name: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    image: "",
  },
  contacts: [],
  filteredContacts: [],
  chats: [],
};

const MainContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

type MainProviderProps = {
  children: React.ReactNode;
};

const MainProvider: FC<MainProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
