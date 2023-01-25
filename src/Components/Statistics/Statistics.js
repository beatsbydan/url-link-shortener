import About from './About/About';
import Shortener from './Shortener/Shortener';
import './Statistics.css';
import '../../App.css'
const Statistics = () => {
    return (  
        <div className="Statistics">
            <Shortener/>
            <h2>Advanced Statistics</h2>
            <p>
                Track how your links are performing across the web with <span>our 
                advanced statistics dashboard.</span>
            </p>
            <About/>
        </div>
    );
}
 
export default Statistics;