import React from 'react';
import Stock from './Stock';
import CurrentTime from './CurrentTime';
import './App.css';

function Header() {
  console.log();
  return (
    <header>
      <h3>Company Name</h3>
    </header>

  );
}

function Main(props) {
  console.log(props);
  return (
      <h5>{props.name} Summary</h5>
  );
}

function Time(props) {
  console.log(props);
  return (
      <h5>{props.date} Time</h5>
  );
}

function Footer(props){
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <Main name="TSLA" />
      <CurrentTime></CurrentTime>
      <Stock></Stock>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}


export default App;
