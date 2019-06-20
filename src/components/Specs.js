import React, {Component} from 'react'
import {withRouter} from "react-router";


const Specs = (props) => {


    return (
        <React.Fragment>
            <h1>Specs</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                </tr>
                </thead>
                {props.specs.map((s, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <th scope="row">{s.name}</th>
                    </tr>
                ))}
            </table>

        </React.Fragment>
    )
}

export default withRouter(Specs);