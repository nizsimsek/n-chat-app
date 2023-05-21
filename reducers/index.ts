export const mainReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      }
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.payload,
      };
    case "SET_FILTERED_CONTACTS":
      return {
        ...state,
        filteredContacts: action.payload,
      };
    case "SET_CHATS":
      return {
        ...state,
        chats: action.payload,
      };
    default:
      return state;
  }
};
