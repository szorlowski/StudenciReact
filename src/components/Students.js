import React, {Component} from 'react'
import {withRouter} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


const Students = (props) => {

    return (
        <React.Fragment>
            <h1>Students </h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Imie</th>
                    <th scope="col">Nazwisko</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                {props.students.map((s, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <th scope="row">{s.firstName}</th>
                        <td>{s.lastName}</td>
                        <td><button onClick={() => props.deleteStudent(s)}>DELETE</button></td>
                    </tr>
                ))}
            </table>
            <Link to="students/new">Click to add student </Link>

        </React.Fragment>
    )
};

export default withRouter(Students);