import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TopBar, Navbar, MainContent } from './components'
import { Homepage, ListItems, Members, Brands } from './pages'


import BorderNav from './helpers/BorderNav'

function App() {
  return (
    <>
      <div className="container ">
        <TopBar />
      </div>

      <BorderNav />
      <div className="bg-danger bg-light">
        <div className="container">
          <Navbar /> 
        </div>
      </div>
      <BorderNav />  

      <MainContent />

      
    </>
  );
}

export default App;
