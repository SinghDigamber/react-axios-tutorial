import React, { Component } from 'react';
import {  Link } from "react-router-dom";

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td><Link className="btn btn-success" to={`/edit/${this.props.obj._id}`}>Edit</Link></td>
                <td><Link className="btn btn-danger" to={`/delete/${this.props.obj._id}`}>Delete</Link></td>
            </tr>
        );
    }
}

export default DataTable;