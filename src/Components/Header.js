import './Header.css'
import { Component } from 'react';


class Header extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {


        return (
            <>
                <div id='navbar'>
                    <div>
                        <h3 style={{ fontSize: "22" + "px", color: "#384ca5" }}>King james</h3>
                    </div>
                    <ul id='navlink' className={this.state.clicked ? "#navlink active" : "#navlink"}>
                        <li style={{ padding: " 8" + "px" }}>About</li>
                        <li style={{ padding: " 8" + "px" }}>Project</li>
                        <li style={{ padding: " 8" + "px" }}>Testimonies</li>
                        <li style={{ padding: " 8" + "px" }}>Contact</li>
                        <li className='dic' style={{ padding: " 8" + "px" }}>Share</li>

                    </ul>

                    <div id='humburger_container' onClick={this.handleClick}>
                        <i id="bars" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>

            </>
        );
    }
}
export default Header;