import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About"
import Tools from "./Components/Tools";
import Projects from "./Components/Project";
import Test from "./Components/Testimoni";
import Footer from "./Components/Footer";
const App = () => {
    return (
        <div>
            <Home />
            <About />
            <Tools></Tools>
            <Projects />
            <Test />
            <Footer />
        </div>
    )
}
export default App;