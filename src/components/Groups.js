import React, {Component} from 'react'
import {withRouter} from "react-router";


const Groups = (props) => {
    return (
        <React.Fragment>
            <h1>Groups</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                </tr>
                </thead>
                {props.groups.map((s, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <th scope="row">{s.name}</th>
                    </tr>
                ))}
            </table>

        </React.Fragment>
    )
};

export default withRouter(Groups);