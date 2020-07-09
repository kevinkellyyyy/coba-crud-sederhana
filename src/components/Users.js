import React, { Component } from 'react';

export default class Users extends Component{
    handleUpdate = () => {
        this.props.updateUser(this.idxNum, this.uname.value, this.uemail.value, this.uphoneNum.value);
    }

    render() {
        const {allUsers, pressEditBtn, pressDelete} = this.props;
        const usersList = allUsers.map((user, idx) => {
            return user.isEditing === true ? (
                <tr key={idx}>
                    <td><input type="text" ref={(val) => {this.uname = val}} required defaultValue={user.name}/></td>
                    <td><input type="text" ref={(val) => {this.uemail = val}} required defaultValue={user.email}/></td>
                    <td><input type="text" ref={(val) => {this.uphoneNum = val}} required defaultValue={user.phoneNum}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.idxNum = idx}} className="btn green"/>
                    </td>
                </tr> 
            ) : (
                <tr  key={idx}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNum}</td>
                    <td><button className="btn white black-text" onClick={() => pressEditBtn(idx)}>Edit</button>  |  <button className="btn red" onClick={()=>pressDelete(idx)}>Delete</button></td>
                </tr>
            )
        })
        return(
            <table className="striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        )
    }
}