import './App.css';


function Banner() {
  return (
    <div class='banner'>
      <h1>Sextant</h1>
    </div>
  );
}

function Exhibit(){
  return (
    <Banner />
  );
}

function App() {
  return (
      
      <Exhibit />
      
  );
}

export default App;
