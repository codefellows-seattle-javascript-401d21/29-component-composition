import React from 'react'
import utils from '../../lib/utils';
import NoteUpdateForm from '../note-update-form';

class NoteItem extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.note;

        this.handleDouble = this.handleDouble.bind(this);
        this.handleGetorSet = this.handleGetorSet.bind(this);
    }

    handleDouble(){
        this.setState({edited: true});
    }

    handleGetorSet(){
        return {
            state: this.state,
            setState: this.setState.bind(this),
        };
    }

    render() {
        let { title, content, id } = this.state;
        return (
            <div>
                <ul>
                    <li className="note" data-id={this.props.note.id} onDoubleClick={this.handleDouble}>
                        <h2>{this.props.note.title}</h2>
                        <p>{this.props.note.content}</p>
                        <button className = 'delete'
                            id={this.props.note.id}
                            onClick={this.props.handleRemoveNote}>
                            Remove Note
                        </button>
                        {utils.renderIf(this.state.edited, 
                            <NoteUpdateForm 
                                note={this.props.note} 
                                handleGetorSet={this.handleGetorSet()} 
                                submit={this.props.submitEdit} 
                            />
                        )};
                    </li>
                </ul>
            </div>
        );
    }
}







export default NoteItem;


