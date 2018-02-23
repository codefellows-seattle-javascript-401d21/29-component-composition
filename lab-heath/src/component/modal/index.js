import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <section className="modal">
        {this.props.children}
      </section>
    );
  }
}

export default Modal;