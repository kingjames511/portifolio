import './Test.css'
import './Project.css'

const Test = () => {

    return (<>
        <div className='test_container'>
            <h3>Testimonials</h3>

        </div>
        <div className='test_head'>
            <div style={{ width: "300px", height: "50px", display: "flex", justifyContent: "center ", alignItems: "center", padding: "19" + "px" }} className='pro_head'>
                <div style={{ width: "380" + "px", height: "60px", display: "flex", justifyContent: "center ", alignItems: "center", padding: "14" + "px" }} className='pro_head'>
                    <div style={{ width: "350" + "px", height: "45px", display: "flex", justifyContent: "center ", alignItems: "center", padding: "10" + "px" }} className='pro_head'>
                        <h3 style={{ color: "blue" }}> Testimonials</h3>
                    </div>
                </div>
            </div>
        </div>

        <Carousal />
    </>);
}

const Carousal = () => {
    return (<>
        <div className='carousal_container'>
            <div>
                <p id='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam nisi culpa itaque vel a ea veritatis voluptate. Voluptas, modi?</p>
            </div>

            <div>
                <p id='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam nisi culpa itaque vel a ea veritatis voluptate. Voluptas, modi?</p>
            </div>

            <div>
                <p id='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam nisi culpa itaque vel a ea veritatis voluptate. Voluptas, modi?</p>
            </div>
        </div>
    </>);
}


export default Test;