import './Tools.css'
import replace from "./6300c9080a1138f54c8c7acd75fe21c9.jpg"
const Tools = () => {
    return (
        <div className='tools_container'>
            <div className='tools_detail'>
                <h3>Tools i use</h3>
                <p>here are some awesome tools i use to make development and problem solving easier and faster for my users</p>
            </div>

            <div className='sub_tool-container'>
                <div>
                    <img className='icon' src={replace} alt="" />
                    <p id='para'>React</p>

                </div>
                <div>
                    <img className='icon' src={replace} alt="" />
                    <p id='para'>React</p>

                </div>
                <div>
                    <img className='icon' src={replace} alt="" />
                    <p id='para'>React</p>

                </div>
                <div>
                    <img className='icon' src={replace} alt="" />
                    <p id='para'>React</p>

                </div>
                <div>
                    <img className='icon' src={replace} alt="" />
                    <p id='para'>React</p>

                </div>
                <div>
                    <img className='icon' src={replace} alt="" />
                    <p id='para'>React</p>

                </div>


            </div>


        </div>
    )
}
export default Tools;