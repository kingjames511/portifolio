import Header from "./Header";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import "./home.css";
const Home = () => {
  return (
    <section style={{ position: "relative" }}>
      <div
        className="home_container"
        style={{
          backgroundColor: "#080d21",
          position: "relative",
        }}
      >
        <Header></Header>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="personal_info"
        >
          <span id="writer">
            <Typewriter
              words={["HI"]}
              loop={1}
              cursor
              cursorStyle="*"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
          <h2>i am king james,</h2>
          <h2>A frontend Developer,</h2>
          <h2>i specialize in creating,</h2>
          <h2 style={{ color: "#00019d" }}>user solutions.</h2>
          <div style={{ padding: "8" + "px", borderRadius: "20" + "px" }}>
            <button
              style={{
                padding: "10" + "px",
                color: "white",
                fontSize: "18" + "px",
                paddingRight: "25" + "px",
                paddingLeft: "25" + "px",
                backgroundColor: "#00019d",
                border: "none ",
              }}
            >
              download CV
            </button>
          </div>
        </motion.div>
      </div>
      <svg className="wave" viewBox="-0 0 500 200">
        {" "}
        <path
          d="m 0 30 c 100 70 300 0 500 10 l 500 0 l 0 0"
          fill="#080d21"
        ></path>{" "}
      </svg>
    </section>
  );
};
export default Home;