import React, {Component} from 'react'
import {withRouter} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from './axios-instance'


class NewStudent extends Component {
    state = {
        student: {
            name: null,
            lastName: null,
        }
    };

    updateName = name => {
        // let student = {...this.state.student};
        // student.name = name;
        // this.setState({student: student})
    };

    updateLastName = lastName => {
        // let student = {...this.state.student};
        // student.lastName = lastName;
        // this.setState({student: student})
    };

    submit = () => {
        // axios.post("http:localhost8080/api/students", this.state.student)
        //     .then(
        //         console.log(this.state.student)
        //     )
        //     .catch(e => console.log("Adding student FAILED"))
    };

    render() {
        return (
            <div>
                First Name
                <input onChange={n => this.updateName(n)}/>
                Last Name
                <input onChange={n => this.updateLastName(n)}/>
                <button onClick={this.submit}>ADD STUDENT</button>
            </div>
        )
    };
}

export default NewStudent;