import React from 'react';

class NoteUpdateForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(e){
        let {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submit({title:this.state.title, content:this.state.content, id:this.props.note.id});
        this.setState({
            title: '',
            content: '',
            edited: false,
        });
    }

    handleCancel(e){
        this.setState({edited: false});
        this.props.handleGetOrSet.setState({edited: false});
    }

    render(){
        return(
            <form className='note-update-form' onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='title'
              placeholder='title'
              value={this.state.title}
              onChange={this.handleChange}  
            />
            <input
              type='textarea'
              name='content'
              placeholder='content'
              value={this.state.content}
              onChange={this.handleChange}  
            />
            <button type='submit'> Update Note </button>
          </form>
        );
    }
}

export default NoteUpdateForm;