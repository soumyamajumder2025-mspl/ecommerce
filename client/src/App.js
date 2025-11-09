import './App.css';
import Navbar from './components/header/Navbar';

function App() {
  return (
    <div style={{ marginTop: '60px', padding: '20px' }}>
      <h1>Main Content Area</h1>
      <p>This is the main content of the page, below the navbar.</p>
      <Navbar />
    </div>
  );
}

export default App;
