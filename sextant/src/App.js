import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IpData from './IpData';

function App() {
  return (

    <div className="App">
      <Banner bannerText="Sextant" />
      <div className='row p-5'>
        
        <Exhibit class="col-md-3 mb-3" name="Ipv4">
            <IpData ipVersion='4'>
            </IpData>
        </Exhibit>
        <Exhibit class="col-md-3 mb-3" name="IpV6">
            <IpData ipVersion='6'>
            </IpData>
        </Exhibit>
      </div>
    </div>


  );
}

export default App;
