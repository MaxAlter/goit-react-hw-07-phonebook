import { connect } from "react-redux";
import { filterContact } from "../Redux/reducers/filterReducer/filterActions";
import { onContact } from "../Redux/reducers/Selectors/contactSelectors";
import App from "./App";

const MSTP = (state) => ({
  contacts: onContact(state),
});

const MDTP = (dispatch) => ({
  filterContact: (text) => dispatch(filterContact(text)),
});

export default connect(MSTP, MDTP)(App);
