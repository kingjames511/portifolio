import './Footer.css'
import './Test.css'
import './Project.css'
import { motion } from "framer-motion";
import { IconBase } from "react-icons";
const Footer = () => {
  return (
    <>
      <div
        id="contact"
        s
        style={{ position: "relative", backgroundColor: "#080d21" }}
      >
        <svg
          id="yo"
          viewBox="0 -20 700 110"
          width="100%"
          height="110"
          preserveAspectRatio="none"
        >
          <path
            transform="translate(0,-20)"
            d="m0, 10 c80, -22 240, 0 350, 18 c90,17 260,7.5 350,-20 v50 h-700 "
            fill="#080d21"
          />{" "}
          <path
            d=" m0 ,10 c80, -18 230, -12 350,7 c80,13 260, 17 350,v100 h-700z"
            fill="#080d21"
          />
        </svg>
        <div className=" footer_container">
          <motion.h3
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Contact me
          </motion.h3>
        </div>
        <div className=" title test_head">
          <div
            style={{
              width: "300px",
              height: "50px",
              display: "flex",
              justifyContent: "center ",
              alignItems: "center",
              padding: "19" + "px",
              borderColor: "white",
            }}
            className="pro_head tt"
          >
            <div
              style={{
                width: "380" + "px",
                height: "60px",
                display: "flex",
                justifyContent: "center ",
                alignItems: "center",
                padding: "14" + "px",
                borderColor: "white",
              }}
              className="pro_head "
            >
              <div
                style={{
                  width: "350" + "px",
                  height: "45px",
                  display: "flex",
                  justifyContent: "center ",
                  borderColor: "white",
                  alignItems: "center",
                  padding: "10" + "px",
                }}
                className="pro_head "
              >
                <h3 style={{ color: "white" }}> Contact me</h3>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </>
  );
};

const Footer2 = () => {
  return (
    <>
      <div className="contactme">
        <h3 className="contt">
          Have a project in mind write me so we cam make something amazing
        </h3>
        <div>
          <input type="text" />
          <button id="btn">Get Quote</button>
        </div>
      </div>
      <div className="social_media">
        <i style={{ color: "white" }} className="fa-brands fa-whatsapp"></i>
        <i style={{ color: "white" }} className="fa-brands fa-x-twitter"></i>
        <i style={{ color: "white" }} className="fa-brands fa-instagram"></i>
        <i style={{ color: "white" }} className="fa-brands fa-linkedin"></i>
        <i style={{ color: "white" }} className="fa-brands fa-github"></i>
      </div>
      <footer>
        <p id="gd">2024 Design by king james and coded with studio code</p>
      </footer>
    </>
  );
};

export default Footer;