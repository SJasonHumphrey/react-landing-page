import './App.css';
import vacation from './assets/vacation.jpg';
import beach from './assets/beach.jpeg';
import marina from './assets/marina.jpeg';
import beachDock from './assets/beachDock.jpeg';
import Hero from './components/Hero';
import { Slider } from './components/Slider';
import Navbar from './components/Navbar';
import Contact from './components/Contact';


function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={beach}/>
      <Slider imageSrc={vacation} title={"Relax"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare suspendisse sed nisi lacus. Vel orci porta non pulvinar neque. Id interdum velit laoreet id donec ultrices tincidunt arcu. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim."} />
      <Slider imageSrc={beachDock} title={"Explore"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc non blandit massa enim nec dui. Tellus mauris a diam maecenas sed enim ut. Nullam non nisi est sit amet facilisis magna etiam."} flipped={true}/>
      <Contact imageSrc={marina} />
    </div>
  );
}

export default App;
