import './About.css'
import '../../../App.css'
import recognition from '../../../images/icon-brand-recognition.svg'
import records from '../../../images/icon-detailed-records.svg'
import customizable from '../../../images/icon-fully-customizable.svg'
const About = () => {
    return (
        <div className="About">
          <div className="profiles">
            <div className="profile one">
              <div className="image">
                <img src={recognition} alt="" />
              </div>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.
              </p>
            </div>
            <div className="profile two">
              <div className="image">
                <img src={records} alt="" />
              </div>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.
              </p>
            </div>
            <div className="profile three">
              <div className="image">
                <img src={customizable} alt="" />
              </div>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      );
}
 
export default About;