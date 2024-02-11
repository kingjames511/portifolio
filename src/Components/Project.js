import './Project.css'
import list from "./6300c9080a1138f54c8c7acd75fe21c9.jpg"
const Projects = () => {
    return (
        <>
            <div className='Project_container'>

                <div style={{ width: "300px", height: "50px", display: "flex", justifyContent: "center ", alignItems: "center", padding: "19" + "px" }} className='pro_head'>
                    <div style={{ width: "380" + "px", height: "60px", display: "flex", justifyContent: "center ", alignItems: "center", padding: "14" + "px" }} className='pro_head'>
                        <div style={{ width: "350" + "px", height: "45px", display: "flex", justifyContent: "center ", alignItems: "center", padding: "10" + "px" }} className='pro_head'>
                            <h3 style={{ color: "blue" }}>Recent Projects</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='project'>i have worked on so many projects but here are some of my most recent one <br /> feel free to visit the projects</p>
                </div>
            </div>
            <div className='project_list'>
                <div className='list'>
                    <img className='list_image' src={list} alt="" />
                    <p>Netflex Clone</p>
                    <p style={{ width: "250" + "px" }}>Lorem ipsum dolor sit amet consectetur adipisicing</p>

                </div>

                <div className='list'>
                    <img className='list_image' src={list} alt="" />
                    <p>Netflex Clone</p>
                    <p style={{ width: "250" + "px" }}>Lorem ipsum dolor sit amet consectetur adipisicing</p>

                </div>

                <div className='list'>
                    <img className='list_image' src={list} alt="" />
                    <p>Netflex Clone</p>
                    <p style={{ width: "250" + "px" }}>Lorem ipsum dolor sit amet consectetur adipisicing</p>

                </div>





            </div>
        </>
    );
}

export default Projects;