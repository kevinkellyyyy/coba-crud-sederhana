import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';

export default class Base extends Component{
    state = {
        users: [
            {name:"Kevin Kelly Isyanta", email: "kevinkevin@email.com", phoneNum: "088222828291", isEditing:false},
            {name:"Jason Willy Isyanta", email: "jasonjason@email.com", phoneNum: "088222567432", isEditing:false},
            {name:"Brian Billy Isyanta", email: "brianbrian@email.com", phoneNum: "088222232123", isEditing:false},
        ]
    }

    addUser = (newUser) => {
        let users = [...this.state.users, newUser];
        this.setState({
            users
        });
    }

    pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
    }

    updateUser = (i, uname, uemail, uphoneNum) => {
        let users = this.state.users;
        users[i].name = uname;
        users[i].email = uemail;
        users[i].phoneNum = uphoneNum;
        users[i].isEditing = false;
        this.setState({
            users
        });
    }

    pressDelete = (i) => {
        let users = this.state.users.filter((u, index) => {
            return index !== i;
        });
        this.setState({
            users
        });
    }

    render(){
        return(
            <div className="container">
                <h1>Coba CRUD dengan React Js</h1>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
        )
    }
}