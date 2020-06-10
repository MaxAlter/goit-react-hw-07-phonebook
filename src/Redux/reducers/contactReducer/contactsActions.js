export const ActionType = {
  SET_ALL_CONTACTS: "contacts/setAllContacts",
  POST_NEW_CONTACT: "contacts/postNewContact",
  DELETE_CONTACTS: "contacts/deleteContact",
  FETCH_SUCCESS: "contacts/fetchSuccess",
  FETCH_ERROR: "contacts/fetchError",
};

export const fetchSuccess = () => ({
  type: ActionType.FETCH_SUCCESS,
});

export const fetchError = () => ({
  type: ActionType.FETCH_ERROR,
});

export const setAllContacts = (data) => ({
  type: ActionType.SET_ALL_CONTACTS,
  payload: data,
});

export const postNewContact = (contact) => ({
  type: ActionType.POST_NEW_CONTACT,
  payload: contact,
});

export const removeContact = (id) => ({
  type: ActionType.DELETE_CONTACTS,
  payload: id,
});
