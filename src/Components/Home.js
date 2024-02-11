import Header from "./Header";

import './home.css'
const Home = () => {
    return (
        <section style={{ position: "relative" }}>
            < div className="home_container" style={{ width: "100" + "%", height: "450" + "px", backgroundColor: "#080d21", position: "relative" }}>

                <Header></Header>
                <div className="personal_info">
                    <h2>hi,</h2>
                    <h2>i am king james,</h2>
                    <h2>A frontend Developer,</h2>
                    <h2>i specialize in creating,</h2>
                    <h2 style={{ color: "#00019d" }}>user solutions.</h2>
                    <div style={{ padding: "8" + "px" }}>
                        <button style={{ padding: "4" + "px", color: "white", fontSize: "18" + "px", paddingRight: "25" + "px", paddingLeft: "25" + "px", backgroundColor: "#00019d", border: "none " }}>download CV</button>
                    </div>
                </div>

            </div>
            <svg className="wave" viewBox="-0 0 500 200"> <path d="m 0 30 c 100 70 300 0 500 10 l 500 0 l 0 0" fill="#080d21"></path> </svg>
        </section>
    )
}
export default Home;