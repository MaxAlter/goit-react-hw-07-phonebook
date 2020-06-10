import React, { Component, Fragment } from "react";
import shortid from "shortid";
import style from "./PhoneBook.module.css";
import AlertContact from "../AlertComponent/AlertContact";


class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    error: false,
  };

  userId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.nameValid()) {
      this.setState({ error: true });
      setTimeout(() => this.setState({ error: false }), 2000);
    } else {

      this.props.postContacts({ ...this.state, id: shortid.generate() });
    }
    this.setState({
      name: "",
      number: "",
    });
  };

  nameValid = () => {
    const notValid = this.props.contacts.find(
      (item) => item.name === this.state.name
    );
    return notValid;
  };

  render() {
    const { name, number, error } = this.state;
    return (
      <Fragment>
        <AlertContact isActiv={error} />

        <form className={style.contactForm} onSubmit={this.handleSubmit}>
          <label className={style.contactForm_label} htmlFor={this.userId}>
            Name
            <input
              className={style.contactForm_input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              id={this.userId}
              autoComplete="off"
            />
          </label>
          <label className={style.contactForm_label} htmlFor={this.userId}>
            Number
            <input
              className={style.contactForm_input}
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>
          <button className={style.contactForm_button} type="submit">
            Add contacts
          </button>
        </form>
      </Fragment>
    );
  }
}

export default ContactForm;
