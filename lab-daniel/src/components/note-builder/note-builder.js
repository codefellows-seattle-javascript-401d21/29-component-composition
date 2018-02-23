import React from 'react';
import { renderIf } from '../../lib/utils';
import NoteForm from '../note-form/note-form';


class NoteBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleDouble = this.handleDouble.bind(this);
    this.handleGetOrSet = this.handleGetOrSet.bind(this);
  }

  handleDouble() {
    this.setState({editing: true});
  }

  handleGetOrSet() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    let { title, content, id } = this.state;
    return (
      <li data-id={id} className='note' onDoubleClick={this.handleDouble}>
        <section>
          <h2>{title}</h2>
          <p>{content}</p>
        </section>
        <button id={id} className='remove' onClick={this.props.remove}>Remove</button>
        {renderIf(this.state.editing, <NoteForm builder={this.handleGetOrSet()} submit={this.props.submit} />)}
      </li>
    );
  }
}

export default NoteBuilder;