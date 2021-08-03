import "./Blocks.css";
import age_of_Ai from "./images/age_of_Ai.jpg";
import Ai  from "./images/Ai.jpg";
import  Artificial_inteligence  from "./images/Artificial_inteligence.jpg";
import days_on_mars from "./images/days_on_mars.jpg";
import digital_resolution from "./images/digital_resolution.jpg";
import elons_future_city from "./images/elons_future_city.jpg";
import earth_pollution from "./images/earth_pollution.jpg";
import mars_undergrounds from "./images/mars_undergrounds.jpg";


function Block_One(){
        return(
        <div className="blocks_container">
            <div className="blocks">
                <img src={age_of_Ai}  alt="Ai" />
                <h3>The Age of Artificial intellegence</h3>
                <a href="https://youtu.be/UwsrzCVZAb8"><button>Watch</button></a>
            </div>
            <div className="blocks">
                <img src={Ai} alt="Ai" />
                <h3>Artificial Intellegence</h3>
                <a href="https://youtu.be/Pls_q2aQzHg"><button>Watch</button></a>
            </div>
            <div className="blocks">
                <img src={days_on_mars} alt="days_on_mars" />
                <h3>Days on Mars</h3>
                <a href="https://youtu.be/G3hPH_bc0Ww"><button>Watch</button></a>
            </div>
            <div className="blocks">
                <img src={digital_resolution} alt="digital_resolution" />
                <h3>Growth of Digitalization</h3>
                <a href="https://youtu.be/V9xZFZ07UbA"><button>Watch</button></a>
            </div>
            <div className="blocks">
                <img src={elons_future_city} alt="elons_future_city" />
                <h3>Elon Musks Future Coty</h3>
                <a href="https://youtu.be/Q1mZ4ADUEZs"><button>Watch</button></a>
            </div>
            <div className="blocks">
                <img src={Artificial_inteligence} alt="Artificial_inteligence" />
                <h3>Bones of AI</h3>
                <a href="https://youtu.be/s0dMTAQM4cw"><button>Watch</button></a>
            </div>
            <div className="blocks">
                <img src={earth_pollution} alt="earth_pollution" />
                <h3>Future Of Earth</h3>
                <a href="https://www.youtube.com/watch?v=lP0UxFfDmu0"><button>Watch</button></a>
            </div>
            <div className="blocks">
                <img src={mars_undergrounds} alt="mars_undergrounds" />
                <h3>Under The Mars</h3>
                <a href="https://www.youtube.com/watch?v=tcTZvNLL0-w"><button>Watch</button></a>
            </div>
        </div>
    );
}
export default Block_One;