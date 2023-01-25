import './App.css';
import Boost from './Components/Boost/Boost';
import Footer from './Components/Footer/Footer';
import GetStarted from './Components/GetStarted/GetStarted';
import Navbar from './Components/Navbar/Navbar';
import Statistics from './Components/Statistics/Statistics';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <GetStarted/>
      <Statistics/>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;
