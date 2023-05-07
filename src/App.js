
import './App.css';
import LargeWithNewsletter from './Component/Footer';
import Navbar from './Component/Navbar';
import Allroutes from './Routes/Allroutes';

function App() {
  return (
    <div className="App" style={{width:'100%'}}>
      <Navbar/>
      <Allroutes/>
      <LargeWithNewsletter />
    </div>
  );
}

export default App;
