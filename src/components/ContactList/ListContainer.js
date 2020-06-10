import { connect } from "react-redux";
import { deleteContact } from "../../Redux/reducers/contactReducer/contactsOperators";
import List from "./list";

const MDTP = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(null, MDTP)(List);
