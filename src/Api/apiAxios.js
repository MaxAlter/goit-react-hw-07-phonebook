import axios from "axios";

export const getContacts = () =>
  axios.get("http://localhost:3333/contacts").then(({ data }) => data);

export const addContacts = (newContact) =>
  axios
    .post("http://localhost:3333/contacts", newContact)
    .then(({ data }) => data);

export const deletContacts = (id) =>
  axios.delete(`http://localhost:3333/contacts/${id}`);
