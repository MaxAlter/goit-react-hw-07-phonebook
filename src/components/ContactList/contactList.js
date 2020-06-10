import React, { Component } from "react";
import style from "./ContactList.module.css";
import ContactListItem from "./ContactListItem";

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        {this.props.contacts.length > 0 && (
          <ul className={style.contactList}>
            {this.props.contacts.map((item) => (
              <ContactListItem item={item} key={item.id} />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ContactList;
