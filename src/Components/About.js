import './About.css'
import profile from "./WhatsApp_Image_2024-02-20_at_10.08.15_c5233db0-removebg-preview.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div className="about_section " id="about">
        <h2 id="title">About me</h2>
        <div className="container">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="sub_container"
          >
            <div
              className="board b2 "
              style={{ backgroundColor: "yelllow" }}
            ></div>

            <div
              id="board"
              className="board"
              style={{ backgroundColor: "#080d21" }}
            ></div>
            <div className="board">
              <img src={profile} alt="" />
            </div>
          </motion.div>
          <div className="sub_container-2 " id="sub_container-2">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="about_page"
            >
              <h3>About me</h3>
              <p id="mobile">
                i am a frontend developer who loves working on a new and create
                projects, have experience working with HTML CSS javascript React
                Tailwind and Git, i am passionate about creating innovate user
                friendly web application and take pride in delivering high
                performance solution.
              </p>
              <p id="mobile">
                i possess a high problem solving skills execellent communication
                ability and a keen eye for details and am always up for
                challenge and i m never afraid to ask question.
              </p>
              <p id="mobile">
                i am a team player and always strive to help my team suceed.
              </p>
              <p id="mobile">
                when am not working you will fing me watching movies, cooking or
                learning new things
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "10" + "px",
                  margin: "13" + "px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10" + "px",
                    paddingRight: "6" + "px",
                    paddingLeft: "6" + "px",
                    backgroundColor: "black",
                    color: "white",
                    paddingTop: "0" + "px",
                    paddingBottom: "0" + "px",
                    padding: "5" + "px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "11" + "px",
                      fontWeight: "bolder",
                      fontSize: "1" + "rem",
                    }}
                  >
                    3
                  </p>
                  <p style={{ marginTop: "4" + "px", fontSize: "14" + "px" }}>
                    years of <br /> experience
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10" + "px",
                    backgroundColor: "black",
                    paddingRight: "12" + "px",
                    paddingLeft: "12" + "px",
                    paddingTop: "0" + "px",
                    paddingBottom: "0" + "px",
                    color: "white",
                    padding: "5" + "px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "10" + "px",
                      fontWeight: "bolder",
                      fontSize: "1" + "rem",
                    }}
                  >
                    20+
                  </p>
                  <p style={{ marginTop: "4" + "px", fontSize: "14" + "px" }}>
                    Active <br /> Projects
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;