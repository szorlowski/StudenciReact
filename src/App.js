import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/shared/Header";
import {Route, Router, Switch} from "react-router";
import Groups from "./components/Groups";
import Specs from "./components/Specs";
import Students from "./components/Students";
import {BrowserRouter} from "react-router-dom";
import axios from './components/axios-instance'
import NewStudent from "./components/NewStudent";


class App extends Component {
    state = {
        students: [],
        groups: [],
        specs: []
    };

    componentWillMount() {
        this.updateStudents();
        this.updateGroups();
        this.updateSpecs();
    }

    updateStudents = () => {
        axios.get('http://localhost:8080/api/students')
            .then(response => {
                this.setState({students: response.data["_embedded"]["students"]})
            })
    };

    updateGroups = () => {
        axios.get('http://localhost:8080/api/groups')
            .then(response => {
                this.setState({groups: response.data["_embedded"]["groups"]})
            })
    };

    updateSpecs = () => {
        axios.get('http://localhost:8080/api/specs')
            .then(response => {
                this.setState({specs: response.data["_embedded"]["specs"]})
            })
    };

    deleteStudent = (s) => {
        axios.delete(s["_links"]["self"]["href"])
            .then(_ => {
                this.updateStudents();
            });
    };


    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/students' render={(props) => <Students {...props}
                                                                                   students={this.state.students}
                                                                                   deleteStudent={(s) => this.deleteStudent(s)}/>}/>
                        <Route exact path='/groups' render={(props) => <Groups {...props} groups={this.state.groups}/>}/>
                        <Route exact path='/specs' render={(props) => <Specs {...props} specs={this.state.specs}/>}/>
                        <Route exact path='/students/new' render={(props) => <NewStudent {...props} />}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
