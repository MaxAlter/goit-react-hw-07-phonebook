import {
  fetchSuccess,
  fetchError,
  setAllContacts,
  removeContact,
  postNewContact,
} from "../../reducers/contactReducer/contactsActions";

import { getContacts, addContacts, deletContacts } from "../../../Api/apiAxios";

export const fetchContacts = () => (dispatch) => {
  getContacts()
    .then((data) => {
      dispatch(fetchSuccess());
      dispatch(setAllContacts(data));
    })
    .catch((error) => dispatch(fetchError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  deletContacts(id)
    .then((data) => {
      dispatch(fetchSuccess());
      dispatch(removeContact(id));
    })
    .catch((error) => dispatch(fetchError(error)));
};

export const postContacts = (newContact) => (dispatch) => {
  addContacts(newContact)
    .then((data) => {
      dispatch(fetchSuccess());
      dispatch(postNewContact(newContact));
    })
    .catch((error) => dispatch(fetchError(error)));
};
