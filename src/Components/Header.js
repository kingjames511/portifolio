import './Header.css'
import { Component } from "react";
import { motion } from "framer-motion";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div id="navbar">
          <div>
            <motion.h3
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: "26" + "px",
                color: "#00019d",
                letterSpacing: "4" + "px",
              }}
            >
              King James
            </motion.h3>
          </div>
          <motion.ul
            initial={{ x: 250, opacity: 0 }}
            animate={{ x: -10, opacity: 1 }}
            transition={{ duration: 1.2 }}
            id="navlink"
            className={this.state.clicked ? "#navlink active" : "#navlink"}
          >
            <a href="#about">
              {" "}
              <li style={{ padding: " 8" + "px" }}>About</li>
            </a>
            <a href="#project">
              <li style={{ padding: " 8" + "px" }}>Project</li>
            </a>
            <a href="#test">
              <li style={{ padding: " 8" + "px" }}>Testimonies</li>
            </a>
            <a href="#contact">
              <li style={{ padding: " 8" + "px" }}>Contact</li>
            </a>
            <a href="#share">
              <li className="dic" style={{ padding: " 8" + "px" }}>
                Share
              </li>
            </a>
          </motion.ul>

          <div id="humburger_container" onClick={this.handleClick}>
            <i
              id="bars"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </div>
      </>
    );
  }
}
export default Header;