
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as Api from './utils/ContactsApi';



class App extends Component {

  state = {
    contacts : []
  }

  componentDidMount() {
    Api.getAll().then((contacts)=>{
        this.setState({contacts});
    })
  }

  onDelete(contact){
    this.setState(prevState=>({
         contacts : prevState.contacts.filter(c => c.id !== contact.id) 
    }))

    Api.remove(contact)
  }
  onCreateContact(contact){
    Api.create(contact).then(contact=>{
      this.setState((state)=>({
        contacts : state.contacts.concat([contact])
      }))
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={()=>{
          return <ListContacts contacts={this.state.contacts} onDelete={ this.onDelete.bind(this) }/>
        }}/>
        <Route path='/create' render={({history})=>{
          return<CreateContact
            onCreateContact={(contact)=>{
              this.onCreateContact(contact);
              history.push('/');
            }} 
          />}}/>
      </div>
    );
  }
}

export default App;
