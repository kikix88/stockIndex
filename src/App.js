import React from 'react';
import Stock from './Stock';
import CurrentTime from './CurrentTime';
import logo from './logo.png';
import Footer from './Footer';
import './App.css';
import styles from './mystyle.module.css';


function Header() {
  console.log();
  return (
    <header>
      <img className="App-logo" src={logo} alt="logo" />
      <h1 className={styles.logo}>Company Name</h1>
    </header>

  );
}

function Main(props) {
  console.log(props);
  return (
      <h3 style={{ font: "bold" , color: "navy"}}>{props.name} Summary</h3>
  );
}





function App() {
  return (
    <div className="App">
      <Header />
      <Main name="TSLA" />
      <CurrentTime />
      <Stock />
      <Footer />
    </div>
  );
}


export default App;


// year={new Date().getFullYear()}
/* function Footer(props){
  return (
    <footer>
      <h6 className="Footer">Copyright {props.year}</h6>
    </footer>
  );
}
*/