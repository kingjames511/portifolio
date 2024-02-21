import "./Project.css";
import list from "./Screenshot (2).png";
import list1 from "./Screenshot (4).png";
import list2 from "./Screenshot (6).png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Projects = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="Project_container" id="project">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1.2, fontSize: 20, margin: 20 }}
          transition={{ duration: 1.4 }}
          style={{
            width: "300px",
            height: "50px",
            display: "flex",
            justifyContent: "center ",
            alignItems: "center",
            padding: "19" + "px",
          }}
          className="pro_head"
        >
          <div
            style={{
              width: "380" + "px",
              height: "60px",
              display: "flex",
              justifyContent: "center ",
              alignItems: "center",
              padding: "14" + "px",
            }}
            className="pro_head"
          >
            <div
              style={{
                width: "350" + "px",
                height: "45px",
                display: "flex",
                justifyContent: "center ",
                alignItems: "center",
                padding: "10" + "px",
              }}
              className="pro_head"
            >
              <h3 style={{ color: "blue" }}>Recent Projects</h3>
            </div>
          </div>
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ duration: 1.2 }}
            className="project"
          >
            i have worked on so many projects but here are some of my most
            recent one <br /> feel free to visit the projects
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.7 }}
        whileHover={{ scale: 0.8, margin: 10 }}
        transition={{ duration: 1.2 }}
        className="project_list"
      >
        <Slider {...settings}>
          <div className="list">
            <img className="list_image" src={list1} alt="" />
            <h4>Crypto Blog Site</h4>
            <p style={{ width: "350" + "px" }}>
              i also worked on crytop buying and selling webiste which was one
              of the site Ever
            </p>
          </div>

          <div className="list">
            <img className="list_image" src={list} alt="" />
            <h4>Netflex Clone</h4>
            <p style={{ width: "300" + "px", fontSize: "18" + "px" }}>
              i created a netflex clone just to test my abilities during my tech
              jounery
            </p>
          </div>

          <div className="list">
            <img className="list_image" src={list2} alt="" />
            <h4>Netflex Clone</h4>
            <p style={{ width: "250" + "px" }}>
              Also worked on a Hospital Website
            </p>
          </div>
        </Slider>
      </motion.div>

      {/* second slider for mobile */}
      <motion.div
        initial={{ scale: 0.7 }}
        whileHover={{ scale: 0.8, margin: 10 }}
        transition={{ duration: 1.2 }}
        className="project_list-mobile"
        id="nv"
      >
        <Slider {...setting}>
          <div className="list-mobile">
            <img className="list_image" src={list1} alt="" />
            <h4>Crypto Blog Site</h4>
            <p style={{ width: "350" + "px" }}>
              i also worked on crytop buying and selling webiste which was one
              of the site Ever
            </p>
          </div>

          <div className="list">
            <img className="list_image" src={list} alt="" />
            <h4>Netflex Clone</h4>
            <p style={{ width: "300" + "px", fontSize: "18" + "px" }}>
              i created a netflex clone just to test my abilities during my tech
              jounery
            </p>
          </div>

          <div className="list">
            <img className="list_image" src={list2} alt="" />
            <h4>Netflex Clone</h4>
            <p style={{ width: "250" + "px" }}>
              Also worked on a Hospital Website
            </p>
          </div>
        </Slider>
      </motion.div>
    </>
  );
};

export default Projects;
