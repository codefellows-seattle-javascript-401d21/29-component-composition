import React from 'react';


class Modal extends React.Component { // eslint-disable-line no-unused-vars

  render() {
    return (
      <section className="modal">
        {this.props.children}
      </section>
    );
  }
}

export default Modal;
