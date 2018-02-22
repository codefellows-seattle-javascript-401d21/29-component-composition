import React from 'react';

class Modal extends React.Component {
  render() { 
    return ( 
      <section className="modal">
        <span onClick={this.props.close}>X</span>
        {this.props.children}
      </section>
     )
  }
}
 
export default Modal;