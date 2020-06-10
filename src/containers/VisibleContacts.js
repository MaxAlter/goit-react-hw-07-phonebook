import { connect } from "react-redux";
import ContactList from "../components/ContactList/contactList";
import { fetchContacts } from "../Redux/reducers/contactReducer/contactsOperators";

const getVisibylitiContacts = (contacts, filterName) => {
  return filterName
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : contacts;
};

const MSTP = ({ contacts, filter }) => ({
  contacts: getVisibylitiContacts(contacts.contacts, filter),
});

const MDTP = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(MSTP, MDTP)(ContactList);
