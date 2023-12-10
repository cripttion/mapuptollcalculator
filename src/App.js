import './App.css';
import Map from './Components/Map';
import Places from './Components/Places';
import Header from './Layouts/Header';
import 'assert';
import { StateManagement } from './StateManagemet';
import TollsData from './Components/TollsData';
function App() {
  return (
 <>
      <Header />
      <StateManagement>
      <div className="app-container">
        <div className="places-container">
          <Places />
          <div>
            <TollsData />
          </div>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
      </StateManagement>
    
      </>
  );
}

export default App;
