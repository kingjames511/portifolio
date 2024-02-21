import './Tools.css'
import { motion } from "framer-motion";
import replace from "./download-removebg-preview (1).png";
import replace1 from "./download-removebg-preview.png";
import replace2 from "./download__1_-removebg-preview (1).png";
import replace3 from "./download__1_-removebg-preview.png";
import replace4 from "./download__3_-removebg-preview.png";
import replace5 from "./download__2_-removebg-preview.png";
const Tools = () => {
  return (
    <div className="tools_container" id="tools-container">
      <motion.div
        id="tools"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="tools_detail"
      >
        <h3>Tools i use</h3>
        <p>
          here are some awesome tools i use to make development and problem
          solving easier and faster for my users
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: -10, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="sub_tool-container"
      >
        <div id="sub_con">
          <img className="icon" src={replace4} alt="" />
          <p id="para">HTML</p>
        </div>
        <div>
          <img className="icon" src={replace1} alt="" />
          <p id="para">CSS</p>
        </div>
        <div>
          <img className="icon" src={replace2} alt="" />
          <p id="para">Javascript</p>
        </div>
        <div>
          <img className="icon" src={replace} alt="" />
          <p id="para">React</p>
        </div>
        <div>
          <img className="icon" src={replace3} alt="" />
          <p id="para">Tailwind</p>
        </div>
        <div>
          <img className="icon" src={replace5} alt="" />
          <p id="para">Git</p>
        </div>
      </motion.div>
    </div>
  );
};
export default Tools;