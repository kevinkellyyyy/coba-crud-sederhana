import React,{ Component } from 'react';

export default class AddUser extends Component{
    state = {
        name: null,
        email: null,
        phoneNum: null,
        isEditing: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        e.target.reset();
    }

    updateState = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input type="text" name="name" autoComplete="off" placeholder="Enter your name" onChange={ this.updateState}  required />
                    </div>
                    <div className="input-field col s2">
                        <input type="text" name="email" autoComplete="off" placeholder="Enter your email" onChange={ this.updateState }  required />
                    </div>
                    <div className="input-field col s2">
                        <input type="text" name="phoneNum" autoComplete="off" placeholder="Enter your phone number" onChange={ this.updateState }  required />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="btn blue"/>
                    </div>
                </form>
            </div>
        )
    }
}