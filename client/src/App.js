import './App.css';
import Navbar from './components/header/Navbar';
import Main from './components/home/Main';
import NewNavbar from './components/newnavbar/NewNavbar';

function App() {
  return (
    <>
      <Navbar />
      <NewNavbar />

      <Main />
    </>
  );
}

export default App;