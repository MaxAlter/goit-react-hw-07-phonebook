import { connect } from "react-redux";
import { postContacts } from "../../Redux/reducers/contactReducer/contactsOperators";
import { onContact } from "../../Redux/reducers/Selectors/contactSelectors";
import ContactForm from "./ContactForm";

const MSTP = (state) => ({
  contacts: onContact(state),
});

const MDTP = (dispatch) => ({
  postContacts: (contact) => dispatch(postContacts(contact)),
});

export default connect(MSTP, MDTP)(ContactForm);
