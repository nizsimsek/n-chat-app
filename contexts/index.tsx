import React, { FC, createContext, useReducer } from "react";
import { reducer } from "../reducers";

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

const initialState = {
  loading: false,
  theme: "light",
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

const mainReducer = (
  { loading, theme, user, contacts, filteredContacts, chats }: InitialStateType,
  action: any
) => ({
    loading: reducer(loading, action),
    theme: reducer(theme, action),
    user: reducer(user, action),
    contacts: reducer(contacts, action),
    filteredContacts: reducer(filteredContacts, action),
    chats: reducer(chats, action),
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
