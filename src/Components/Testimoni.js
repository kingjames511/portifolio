import './Test.css'
import './Project.css'
import Slider from "react-slick";
import { motion } from "framer-motion";
const Test = () => {
  return (
    <>
      <div className="test_container" id="test">
        <motion.h3
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          {" "}
          Testimonials
        </motion.h3>
      </div>
      <div className="test_head">
        <div
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
              <h3 style={{ color: "blue" }}> Testimonials</h3>
            </div>
          </div>
        </div>
      </div>

      <Carousal />
    </>
  );
};

const Carousal = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <motion.div
        initial={{ scale: 0.5 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="carousal_container"
      >
        <Slider {...settings}>
          <div>
            <p id="p2">
              He is really Good in what he does keep it up bro and God will see
              you through Thanks for delivering my Work so fast
            </p>
            <h4 style={{ textAlign: "center", margin: "15" + "px" }}>
              {" "}
              Mr Collins
            </h4>
          </div>

          <div>
            <p id="p2">
              Wow <span> &#128515;</span> Bro, you are Amazing, i really
              Appreciate your hard working and consistency Thanks Very Much for
              the clean Job !
            </p>
            <h4 style={{ textAlign: "center", margin: "15" + "px" }}>
              {" "}
              Mr kingsely
            </h4>
          </div>

          <div>
            <p id="p2">
              Thanks man for the Job well done, i Must say you are perfect man
              for this work keep it work
              <p>&#128525;</p>
            </p>
            <h4 style={{ textAlign: "center", margin: "15" + "px" }}>
              {" "}
              Mr Kiddo
            </h4>
          </div>
        </Slider>
      </motion.div>
    </>
  );
};


export default Test;