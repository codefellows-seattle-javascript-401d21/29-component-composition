import React from 'react';
import Modal from '../modal/modal';
import { renderIf } from '../../../lib/utils';


class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.item ? this.props.item : {};
  //props(arguemnts) is whats beig passed down state is whats being chsnged on the current level.
  }
  render() { 
    return ( 
      <div onDoubleClick={() => this.setState({edit: !this.state.edit})}>
        {renderIf(this.state.edit,
          <Modal title={this.state.title}
            content={this.state.content}
            setState={(item) => this.setState({title: item.title, content: item.content})}/>
        )}
        <li className="note-item" id={this.props.item._id}>
          <h2>{this.state.title}</h2>
          <p >{this.state.content}</p>
        </li>
        <button className="delete-note" type="button" value={this.props.item._id} onClick={this.props.handleRemove}>Delete Note</button>
      </div>
    );
  }
}
export default NoteItem;
