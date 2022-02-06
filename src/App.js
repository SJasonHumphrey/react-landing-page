import './App.css';
import vacation from './assets/vacation.jpg';
import beach from './assets/beach.jpeg';
import saintlucis from './assets/saintlucia.jpeg';
import beachDock from './assets/beachDock.jpeg';
import Hero from './components/Hero';
import { Slider } from './components/Slider';


function App() {
  return (
    <div className='App'>
      <Hero imageSrc={beach}/>
      <Slider imageSrc={vacation} title={"Title"} subtitle={"subtitle"} />
      <Slider imageSrc={beachDock} title={"Title"} subtitle={"subtitle"} flipped={true}/>
    </div>
  );
}

export default App;
