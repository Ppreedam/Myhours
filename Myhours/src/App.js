
import './App.css';
import Navbar from './Components/navbar/Navbar';
import AllRoutes from "./Components/Routes/AllRoutes"
import Footer from "./Components/footer/Footer"

function App() {
  return (
    <div className="App">
     <Navbar/>
       <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
