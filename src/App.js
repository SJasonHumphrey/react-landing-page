import './App.css';
import vacation from './assets/vacation.jpg';
import beach from './assets/beach.jpeg';
import saintlucis from './assets/saintlucia.jpeg';
import beachDock from './assets/beachDock.jpeg';
import Hero from './components/Hero';
import { Slider } from './components/Slider';
import Navbar from './components/Navbar';


function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];
  return (
    <div className='App'>
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={beach}/>
      <Slider imageSrc={vacation} title={"Relax"} subtitle={"subtitle"} />
      <Slider imageSrc={beachDock} title={"Explore"} subtitle={"subtitle"} flipped={true}/>
    </div>
  );
}

export default App;
