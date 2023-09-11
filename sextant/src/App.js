import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (

    <div className="App">
      <Banner bannerText="Sextant" />
      <div className='row p-5'>
        <Exhibit class="col-md-3 mb-3" name="I'm an exhibit!"></Exhibit>
        <Exhibit class="col-md-3 mb-3" name="I'm an exhibit!"></Exhibit>
        <Exhibit class="col-md-3 mb-3" name="I'm an exhibit!"></Exhibit>
        <Exhibit class="col-md-3 mb-3" name="I'm an exhibit!"></Exhibit>
        <Exhibit class="col-md-3 mb-3" name="I'm an exhibit!"></Exhibit>

      </div>
    </div>


  );
}

export default App;
