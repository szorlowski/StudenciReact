import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {name: 'Students', value: '/students'},
                {name: 'Groups', value: '/groups'},
                {name: 'Specs', value: '/specs'},
            ]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {this.state.items.map(i => (
                            <li className="nav-item active">
                                <a className="nav-link" href={i.value}>{i.name}<span
                                    className="sr-only">(current)</span></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;
