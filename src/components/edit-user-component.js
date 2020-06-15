// ** create-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class EditUser extends Component {

    constructor(props) {
        super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user: {
                email:'',
                name:''
            },
            
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/users/edit/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ user: res.data });                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeUserName(e) {
        let updatedname = e.target.value;
        this.setState(currentState=>({
            user: {...currentState.user,name:updatedname} }
            ))
    }

    onChangeUserEmail(e) {
       let updatedEmail = e.target.value;
        this.setState(currentState=>({
            user: {...currentState.user,email:updatedEmail} }
            ))
    }

    onSubmit(e) {
        e.preventDefault()
        axios.put(`http://localhost:4000/users/update/${this.props.match.params.id}`, this.state.user)
            .then((res) => {
                this.setState(
                    currentState=>({
                        user: {...currentState.user,email:res.email,name:res.name} }
                        )  
                )
                
            }).catch((error) => {
                console.log(error)
            });
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" value={this.state.user.name} onChange={this.onChangeUserName} className="form-control"  name="name"/>
                    </div>
                    <div className="form-group">
                        <label>Add User Email</label>
                        <input type="text" value={this.state.user.email} onChange={this.onChangeUserEmail} className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update User" className="btn btn-primary btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}