import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./list.module.css";

class List extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

  

  deleteContact = () => {
    this.props.deleteContact(this.props.id);
  };

  render() {
    const { number, name } = this.props;
    return (
      <>
        <div className={style.list}>
          {number} : {name}
          <button
            className={style.button}
            type="button"
            onClick={this.deleteContact}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default List;
