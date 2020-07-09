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
                    <td><input className="form-control" type="text" ref={(val) => {this.uname = val}} required defaultValue={user.name}/></td>
                    <td><input className="form-control" type="text" ref={(val) => {this.uemail = val}} required defaultValue={user.email}/></td>
                    <td><input className="form-control" type="text" ref={(val) => {this.uphoneNum = val}} required defaultValue={user.phoneNum}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.idxNum = idx}} className="btn btn-success btn-lg"/>
                    </td>
                </tr> 
            ) : (
                <tr  key={idx}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNum}</td>
                    <td><button className="btn btn-warning btn-lg" onClick={() => pressEditBtn(idx)}>Edit</button>  |  <button className="btn btn-danger btn-lg" onClick={()=>pressDelete(idx)}>Delete</button></td>
                </tr>
            )
        })
        return(
            <table className="table table-dark table-striped table-hover table-sm ta">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className=".table-striped">
                    {usersList}
                </tbody>
            </table>
        )
    }
}