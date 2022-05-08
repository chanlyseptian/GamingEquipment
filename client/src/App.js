import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TopBar, Navbar } from './components'

function App() {
  return (
    <>
      <div className="container ">
        <TopBar />
      </div>
      <div className="border-nav mb-2">
        
      </div>
      <div className="container">
        <Navbar />
      </div>

    </>
  );
}

export default App;
