
import { ActionType } from "../../reducers/contactReducer/contactsActions";

const defaultState = {
  contacts: [],
  error: "",
};

const contactReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.POST_NEW_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case ActionType.DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case ActionType.FETCH_SUCCESS:
      return {
        ...state,
        error: "",
      };
    case ActionType.SET_ALL_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case ActionType.FETCH_ERROR:
      return {
        ...state,
        error: " UPS ERROR",
      };

    default:
      return state;
  }
};

export default contactReducer;
