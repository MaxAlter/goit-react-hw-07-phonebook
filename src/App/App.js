import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";

import ContactForm from "../components/ContactForm/ContactFomContainer";
import VisibleContactList from "../containers/VisibleContacts";
import Filter from "../components/filter/filter";
import PhoneBook from "../components/PhoneBook/PhoneBook";

class App extends Component {
  handleFIlter = (e) => {
    this.props.filterContact(e.target.value);
  };

  render() {
    return (
      <TransitionGroup component={null}>
        <>
          <PhoneBook title="PhoneBook" />
          <ContactForm onHandleForm={this.handleForm} />
          <h2>Contacts</h2>
          {this.props.contacts.length >= 2 && (
            <Filter onChangeFilter={this.handleFIlter} />
          )}
          <VisibleContactList
            items={this.props.filterContact}
            onDeleteList={this.deleteList}
          />
        </>
      </TransitionGroup>
    );
  }
}


export default App;
