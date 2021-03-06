import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';
class CreateContact extends Component{

    onSubmit = (e)=>{
        e.preventDefault();
        const values = serializeForm(e.target, {hash:true});
        this.props.onCreateContact(values);
    }

    render(){
        return(
            <div>
                <Link to='/'className='close-create-contact'> Close </Link>
                <form onSubmit={this.onSubmit} className='create-contact-form'>
                    <ImageInput 
                        className='create-contact-avatar-input'
                        name='avatarURL'
                        maxHeight={64}
                    />
                    <div className='create-contact-details'>
                        <input type='text' name='name' placeholder='Name'/>
                        <input type='text' name='email' placeholder='E-mail'/>
                        <button>Add contact</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateContact;