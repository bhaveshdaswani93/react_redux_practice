import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name:'',
        age:'',
        counter:0
    }

    nameChangeHandler = (event) =>{
        event.persist()
        this.setState((prevState,props) => {
            return {
                name:event.target.value,
                counter:prevState.counter
            }
        } )
    }

    ageChangeHandler = (event) =>{
        this.setState({
            age:event.target.value
        })
    }

    render() {
        return (
        <div className="AddPerson">
            <input type='text' onChange={this.nameChangeHandler} value={this.state.name} />
            <input type='number' onChange={this.ageChangeHandler} value={this.state.age} />
            <button onClick={() => this.props.personAdded(this.state.name,this.state.age)}>Add Person</button>
        </div>
        )
    }
} 

export default AddPerson;