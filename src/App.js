
import './App.css';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Transaction from './components/Transaction/Transaction';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Featured/>
     <Transaction/>
     <Footer/>
    </div>
  );
}

export default App;
