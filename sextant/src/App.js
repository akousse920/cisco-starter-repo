import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IpData from './IpData';
import Latency from './Latency';

function App() {
  return (

    <div className="App">
      <Banner bannerText="Sextant" />
      <div className='row p-5'>
        
        <Exhibit class="col-md-6 mb-3" name="Ipv4">
            <IpData ipVersion='4'>
            </IpData>
        </Exhibit>
        <Exhibit class="col-md-6 mb-3" name="Ipv6">
            <IpData ipVersion='6'>
            </IpData>
        </Exhibit>
        <Exhibit class="col-md-4 mb-3" name="Latency">
            <Latency>
              
            </Latency>
        </Exhibit>
      </div>
    </div>


  );
}

export default App;
